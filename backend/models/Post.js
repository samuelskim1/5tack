// backend/models/Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    comment_id: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      // required: true
    },
    author_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    game_id: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: [String],
      required: false
    },
    videoUrls: {
      type: [String],
      required: false
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);
