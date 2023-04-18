// backend/routes/api/reviews.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const { requireUser } = require('../../config/passport');

router.post('/',  async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({}).populate('reviewer_id');
    const modifiedReviews = Object.assign({}, ...reviews.map(review => ({ [review._id]: review })));
    res.status(200).json(modifiedReviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('review_id');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id',  async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { rating: req.body.rating, description: req.body.description },
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

router.delete('/:id',  async (req, res) => {
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

module.exports = router;