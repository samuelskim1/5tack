const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Post = mongoose.model('Post');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}).populate('game_id', 'name');
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await Post.findById(req.params.id).populate('game_id', 'name');
        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});