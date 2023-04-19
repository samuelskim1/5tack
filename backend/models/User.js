// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    // required: true
  },
  profileImageUrl: {
    type: String,
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    // required: true
  },
  hashedPassword: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
