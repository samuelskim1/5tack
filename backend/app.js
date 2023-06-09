// backend/app.js

const express = require("express");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug');

const http = require('http');
const socketIO = require('socket.io');

const cors = require('cors');
const csurf = require('csurf');
const { isProduction } = require('./config/keys');

require('./models/User');
require('./models/Post');
require('./models/Category');
require('./models/Game');
require('./models/Review');
require('./models/Comment')

require('./config/passport');

const usersRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const categoriesRouter = require('./routes/api/categories')
const gamesRouter = require('./routes/api/games');
const reviewsRouter = require('./routes/api/reviews');
const commentsRouter = require('./routes/api/comments');

const csrfRouter = require('./routes/api/csrf');
const passport = require('passport');
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

app.use(logger('dev')); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies

app.use(passport.initialize());

// Security Middleware
if (!isProduction) {
  // Enable CORS only in development because React will be on the React
  // development server (http://localhost:3000). (In production, the Express 
  // server will serve the React files statically.)
  app.use(cors());
}

// Set the _csrf token and create req.csrfToken method to generate a hashed
// CSRF token
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);


if (isProduction) {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  app.get('/', (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  app.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  app.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });
}

// Attach Express routers
app.use('/api/user', usersRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/games', gamesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/comments', commentsRouter);

app.use('/api/csrf', csrfRouter);

// Express custom middleware for catching all unmatched requests and formatting
// a 404 error to be sent as the response.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

const serverErrorLogger = debug('backend:error');

// Express custom error handler that will be called whenever a route handler or
// middleware throws an error or invokes the `next` function with a truthy value
app.use((err, req, res, next) => {
  serverErrorLogger(err);
  // const statusCode = err.statusCode || 500;
  const statusCode = 200;
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode,
    errors: err.errors
  });
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle new comments
  socket.on('newComment', (comment) => {
    console.log(`Comment received: ${comment}`);
    // Broadcast the comment to all connected clients
    io.emit('comment', comment);
  });

  // Handle new posts
  socket.on('newPost', (post) => {
    console.log(`New post received: ${post.title}`);
    // Broadcast the post to all connected clients
    io.emit('newPost', post);
  });

  // Handle new reviews
  socket.on('newReview', (review) => {
    console.log(`New review received: ${review.content}`);
    // Broadcast the review to all connected clients
    io.emit('newReview', review);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

module.exports = { app, server };
