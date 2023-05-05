// backend/routes/api/reviews.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const User = mongoose.model('User')
const { requireUser } = require('../../config/passport');
const { io } = require('../../app');

router.post('/',  async (req, res) => {

  const reviewData = {
    ...req.body
  };
  try {
    const newReview = await Review.create(reviewData);
    const findNewReview = await Review.findById(newReview._id)
                                            .populate("user_id")
                                            .populate("reviewer_id");
    res.status(201).json(findNewReview);
    // io.emit('newReview', newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({})
                                .populate('reviewer_id')
                                .populate('user_id');
    const modifiedReviews = Object.assign({}, ...reviews.map(review => ({ [review._id]: review })));
    res.status(200).json(modifiedReviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('reviewer_id');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', requireUser, async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, rating: req.body.rating, description: req.body.description },
      { new: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', requireUser, async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(204).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//custom route for getting all the reviews for a singular user
router.get('/user/:username', async (req, res, next) => {
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
    const userReviews = await Review.find({ user_id: user.id })
      .sort({ createdAt: -1 })
      .populate("user_id")
      .populate("reviewer_id")
    const modifiedUserReviews = Object.assign({}, ...userReviews.map(review => ({ [review._id]: review })));
    return res.json(modifiedUserReviews);
  }
  catch (err) {
    return res.json([]);
  }
})


module.exports = router;