// backend/routes/api/posts.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const User = mongoose.model('User');
const Game = mongoose.model('Game');
const { requireUser } = require('../../config/passport');
const { io } = require('../../app');
const { multipleFilesUpload, multipleMulterUpload } = require("../../awsS3");

router.post('/', multipleMulterUpload("images"), multipleMulterUpload("videos"), requireUser, async (req, res) => {
  // await console.log("req", req);
  // const imageUrls = await multipleFilesUpload({ files: req.files.images, public: true });
  // const videoUrls = await multipleFilesUpload({ files: req.files.videos, public: true });

  const postData = {
    ...req.body
    // imageUrls,
    // videoUrls
  };
  
  try {
    const newPost = await Post.create(postData);
    res.status(201).json(newPost);
    // await console.log("res", res);

    // Emit a WebSocket event when a new post is created
    // io.emit('newPost', newPost);
  } catch (error) {
    // console.log("catching errors from the backend", error);
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
                            .populate("author_id", "_id username profileImageUrl")
                            .populate("comment_id")
    const modifiedPosts = Object.assign({}, ...posts.map(post => ({ [post._id]: post })));
    res.status(200).json(modifiedPosts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
                           .populate("author_id", "_id username profileImageUrl")
                           .populate("comment_id")
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', requireUser,  async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
                            req.params.id,
                            { title: req.body.title, description: req.body.description },
                            { new: true }
                            )
                            .populate("author_id", "_id username profileImageUrl")
                            .populate("comment_id")

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', requireUser,  async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id)
                           .populate("author_id", "_id username profileImageUrl")
                           .populate("comment_id")
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(204).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//custom route for getting all the posts for a singular user
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
    const userPosts = await Post.find({ author_id: user.id })
      .sort({ createdAt: -1 })
      .populate("comment_id")
      .populate("author_id", "username profileImageUrl")
    const modifiedPosts = Object.assign({}, ...userPosts.map(post => ({ [post._id]: post })));
    return res.json(modifiedPosts);
  }
  catch (err) {
    return res.json([]);
  }
})

//custom route for getting all the posts for a singular game
router.get('/game/:nameURL', async (req, res, next) => {
  let game;
  try {
    game = await Game.findOne({ nameURL: req.params.nameURL });
    if (!game) {
      const error = new Error('game not found');
      error.statusCode = 404;
      error.errors = { message: "No game found with that game" };
      return next(error);
    }
  } catch (err) {
    const error = new Error('game not found');
    error.statusCode = 404;
    error.errors = { message: "No game found with that game" };
    return next(error);
  }
  try {
    const gamePosts = await Post.find({ game_id: game.id })
      .sort({ createdAt: -1 })
      .populate("comment_id")
      .populate("author_id", "username profileImageUrl")
    const modifiedPosts = Object.assign({}, ...gamePosts.map(post => ({ [post._id]: post })));
    return res.json(modifiedPosts);
  }
  catch (err) {
    return res.json([]);
  }
})

module.exports = router;