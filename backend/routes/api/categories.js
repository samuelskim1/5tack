const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const { requireUser } = require('../../config/passport');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}).populate('game_id');
        const modifiedCategories = Object.assign({}, ...categories.map(category => ({ [category._id]: category })));
        res.status(200).json(modifiedCategories);
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


module.exports = router;