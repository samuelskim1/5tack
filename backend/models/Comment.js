// backend/models/Comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { 
    type: String, 
    required: true,
    maxlength: 200
  },
  author_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  post_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Post',
    // required: true 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
