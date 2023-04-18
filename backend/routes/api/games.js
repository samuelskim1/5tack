const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const { requireUser } = require('../../config/passport');

router.get('/', async (req, res) => {
  try {
    const games = await Game.find({}).populate('category_id');
    res.status(200).json(games)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).populate('category_id');
    if (!game) {
      return res.status(404).json({ message: 'Game not found' })
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json( {message: error.message });
  }
})

module.exports = router