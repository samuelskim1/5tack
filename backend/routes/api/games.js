// backend/routes/api/games.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const { requireUser } = require('../../config/passport');
const { multipleFilesUpload, multipleMulterUpload } = require("../../awsS3");

router.post('/', multipleMulterUpload("images"), requireUser, async (req, res) => {
  const imageUrls = await multipleFilesUpload({ files: req.files, public: true });
  try {
    const newGame = await Game.create(req.body, imageUrls,);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const games = await Game.find({});
    const modifiedGames = Object.assign({}, ...games.map(game => ({ [game.nameURL]: game })));
    res.status(200).json(modifiedGames)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/:nameURL', async (req, res, next) => {
  try {
    const game = await Game.findOne({ nameURL: req.params.nameURL });
    if (!game) {
      let error = new Error('Game not found');
      error.statusCode = 404;
      error.errors = { message: "No game with that name exists in our website"};
      return next(error);
      // return res.status(404).json({ message: 'Game not found' })
    }
    res.status(200).json(game);
  } catch (err) {
    let error = new Error('Game not found');
    error.statusCode = 404;
    error.errors = { message: "No game with that name exists in our website" };
    return next(error);
    // res.status(400).json( {message: error.message });
  }
})

// router.get('/:id', async (req, res) => {
//   try {
//     const game = await Game.findById(req.params.id);
//     if (!game) {
//       return res.status(404).json({ message: 'Game not found' })
//     }
//     res.status(200).json(game);
//   } catch (error) {
//     res.status(400).json( {message: error.message });
//   }
// })


module.exports = router