// backend/config/keys.js
module.exports = {
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NODE_ENV === 'production'
}