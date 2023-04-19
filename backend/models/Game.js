const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { 
      type: String,
      required: true
    },
    nameURL: { 
      type: String,
      required: true
    },
    imageUrls: {
      type: [String],
      required: false
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Game', gameSchema);
