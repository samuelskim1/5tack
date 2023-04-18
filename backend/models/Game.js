const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { 
      type: String,
      required: true
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Game', gameSchema);
