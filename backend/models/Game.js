const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { 
      type: String,
      required: true
    }
    // post_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Post',
    //   required: true
    // },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Game', gameSchema);
