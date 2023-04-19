// backend/routes/api/posts.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const { requireUser } = require('../../config/passport');
const { io } = require('../../app');
const { multipleFilesUpload, multipleMulterUpload } = require("../../awsS3");

router.post('/', multipleMulterUpload("images"), multipleMulterUpload("videos"), requireUser, async (req, res) => {
  const imageUrls = await multipleFilesUpload({ files: req.files.images, public: true });
  const videoUrls = await multipleFilesUpload({ files: req.files.videos, public: true });

  const postData = {
    ...req.body,
    imageUrls,
    videoUrls
  };

  try {
    const newPost = await Post.create(postData);
    res.status(201).json(newPost);

    // Emit a WebSocket event when a new post is created
    io.emit('newPost', newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({}).populate("author_id", "_id username profileImageUrl");
    const modifiedPosts = Object.assign({}, ...posts.map(post => ({ [post._id]: post })));
    res.status(200).json(modifiedPosts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author_id", "_id username profileImageUrl");
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