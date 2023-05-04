// routes/api/users.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Review = mongoose.model('Review');
const passport = require('passport');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

const { loginUser, restoreUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const validateUpdateUser = require('../../validations/updateUser');

const { singleFileUpload, singleMulterUpload } = require("../../awsS3");

const DEFAULT_PROFILE_IMAGE_URL = "https://5tack.s3.amazonaws.com/public/0.jpeg";

function filterUser(user) {
  const filteredUser = user.toObject();
  delete filteredUser.hashedPassword;
  return filteredUser;
}

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
                            .populate("username", "_id email description profileImageUrl")
                            .populate("review_id")
                            .sort({ createdAt: -1 });
    const modifiedUsers = Object.assign({}, ...users.map(user => ({ [user.username]: filterUser(user) })));
    return res.json(modifiedUsers);
  }
  catch(err) {
    return res.json([]);
  }
});


router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    // In development, allow React server to gain access to the CSRF token
    // whenever the current user information is first loaded into the
    // React application
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  return res.json(filterUser(req.user));
});

router.get('/:username', async (req, res, next) => {
  let user;
  try {
    user = await User.findOne({ username: req.params.username });
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      error.errors = { message: "No user found with that username" };
      return next(error);
    }
  } catch(err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that username" };
    return next(error);
  }
  try {
    const users = await User.findOne({ username: req.params.username })
                              .sort({ createdAt: -1 })
                              .populate("email", "_id username description profileImageUrl")
                              .populate("review_id")
    return res.json(filterUser(users));
  }
  catch(err) {
    return res.json([]);
  }
})

router.get('/:username/average', async (req, res, next) => {
  let user;
  try {
    user = await User.findOne({ username: req.params.username });
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      error.errors = { message: "No user found with that username" };
      return next(error);
    }
  } catch (err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that username" };
    return next(error);
  }

  try {
    const userReviews = await Review.find({ user_id: user.id });
    const totalRating = userReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / userReviews.length;
    return res.json({ averageRating });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// POST /api/users/register
router.post('/register', singleMulterUpload("profileImageUrl"), validateRegisterInput, async (req, res, next) => {
  // Check to make sure no one has already registered with the proposed email or
  // username.
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  });

  if (user) {
    // Throw a 400 error if the email address and/or email already exists
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }
  const profileImageUrl = req.file ?
  await singleFileUpload({ file: req.file, public: true }) :
  DEFAULT_PROFILE_IMAGE_URL;

  // Otherwise create a new user
  const newUser = new User({
    username: req.body.username,
    profileImageUrl,
    email: req.body.email,
    ratings: []
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(filterUser(user))); 
      }
      catch(err) {
        next(err);
      }
    })
  });
});

router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { credentials: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(filterUser(user)));
  })(req, res, next);
});


// POST /api/users/logout
router.post('/logout', (req, res) => {
  req.logout(); // clears the login session and removes req.user
  res.status(204).end(); // sends a 204 No Content response
});


router.patch('/:id', singleMulterUpload("profileImageUrl"), validateUpdateUser, async (req, res) => {
  
  // take image and upload
  const profileImageUrl = req.file ?
  await singleFileUpload({ file: req.file, public: true }) :
  DEFAULT_PROFILE_IMAGE_URL;
  req.body.profileImageUrl = profileImageUrl;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(filterUser(user));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
