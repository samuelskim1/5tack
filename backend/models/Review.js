const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    reviewer_id: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
      maxlength: 50
    },
    rating: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 400
    },
  }, 
  {
    timestamps: true
  });

module.exports = mongoose.model('Review', reviewSchema);
