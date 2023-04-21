const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const { requireUser } = require('../../config/passport');
// const { io } = require('../../app');

router.post('/', requireUser, async (req, res) => {
  const commentData = {
    ...req.body,
  };

  try {
    const newComment = await Comment.create(commentData);
    res.status(201).json(newComment);

    // io.emit('newComment', newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("author_id", "_id username profileImageUrl")
      // .populate("post_id");
    const modifiedComments = Object.assign({}, ...comments.map(comment => ({ [comment._id]: comment })));
    res.status(200).json(modifiedComments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("author_id", "_id username profileImageUrl");
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', requireUser,  async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', requireUser,  async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(204).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
