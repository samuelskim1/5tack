const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const { requireUser } = require('../../config/passport');

router.post('/',  async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}).populate('game_id');
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('game_id');
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id',  async (req, res) => {
  try {
      const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { game_id: req.body.game_id },
      { new: true }
      );
      if (!category) {
      return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(204).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;