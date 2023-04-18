// backend/seeders/images.js
require('dotenv').config({ path: __dirname + '/../.env' });
console.log('MONGO_URI:', process.env.MONGO_URI);

const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Post = require('../models/Post');

const DEFAULT_PROFILE_IMAGE_URL = 'https://5tack.s3.amazonaws.com/public/cartoon-dead-fish.png'; // <- Insert the S3 URL that you copied above here
const DEFAULT_PROFILE_VIDEO_URL = 'https://5tack.s3.amazonaws.com/public/The+Capybara+Song+Official+Music+Video+%F0%9F%8E%B6%F0%9F%8E%B6+%23capybara+%23capybaras+%23shorts+%23capybarasong.mp4';

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    initializeImages();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

// Initialize image fields in db
const initializeImages = async () => {
  console.log("Initializing profile avatars...");
  await User.updateMany({}, { profileImageUrl: DEFAULT_PROFILE_IMAGE_URL });

  console.log("Initializing Post image and video URLs...");
  await Post.updateMany({}, { imageUrls: [], videoUrl: DEFAULT_PROFILE_VIDEO_URL });

  console.log("Done!");
  mongoose.disconnect();
}
