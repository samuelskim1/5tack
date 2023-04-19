const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');
const { requireUser } = require('../../config/passport');

router.post('/', requireUser, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = new Comment({
      content: req.body.content,
      author_id: req.user._id
    });

    await comment.save();

    post.comments.push(comment);
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate({
      path: 'comments',
      populate: {
        path: 'author_id',
        select: '_id username profileImageUrl'
      }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post.comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:commentId', requireUser, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const commentIndex = post.comments.indexOf(req.params.commentId);

    if (commentIndex === -1) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    post.comments.splice(commentIndex, 1);
    await post.save();

    await Comment.findByIdAndRemove(req.params.commentId);

    res.status(204).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
