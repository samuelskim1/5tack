// backend/routes/api/posts.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const { requireUser } = require('../../config/passport');
const { io } = require('../../app');

/* GET posts listing. */
router.post('/', requireUser, async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);

    // Emit a WebSocket event when a new post is created
    io.emit('newPost', newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({}).populate('author_id');
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author_id');
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
    );
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
    const post = await Post.findByIdAndRemove(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(204).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;