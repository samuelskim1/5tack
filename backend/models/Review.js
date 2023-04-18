const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true
    },
    reviewer_id: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true
    },
    rating: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }, 
  {
    timestamps: true
  });

module.exports = mongoose.model('Review', reviewSchema);
