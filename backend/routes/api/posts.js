// routes/api/posts.js

const express = require('express');
const router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/posts"
  });
});

module.exports = router;