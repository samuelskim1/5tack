// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    // required: true,
    maxlength: 400
  },
  profileImageUrl: {
    type: String,
  },
  hashedPassword: {
    type: String,
    required: true
  },
  favorites: {
    type: [String],
    required: false
  },
  playStyle: {
    type: [String],
    required: false
  },
  review_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
    // required: true,
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
