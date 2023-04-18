const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { 
      type: String,
      required: true
    },
    game_id: [{
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true
    }],
    imageUrls: {
      type: [String],
      required: false
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Category', categorySchema);
