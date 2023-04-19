// backend/models/Comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { 
    type: String, 
    required: true 
  },
  author_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
