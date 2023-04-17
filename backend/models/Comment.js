const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { 
    type: String, 
    required: true 
  },
  author_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
