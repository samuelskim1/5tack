// frontend/src/socket.js
// import { io } from 'socket.io-client';

// const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000');

// export default socket;

// LISTS

// frontend/src/components/PostsList.js
// import React, { useEffect, useState } from 'react';
// import socket from '../socket';

// const PostsList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     socket.on('newPost', (post) => {
//       setPosts((prevPosts) => [...prevPosts, post]);
//     });

//     return () => {
//       socket.off('newPost');
//     };
//   }, []);

  // Render the list of posts
  // ...
// };

// frontend/src/components/ReviewsList.js
// import React, { useEffect, useState } from 'react';
// import socket from '../socket';

// const ReviewsList = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     socket.on('newReview', (review) => {
//       setReviews((prevReviews) => [...prevReviews, review]);
//     });

//     return () => {
//       socket.off('newReview');
//     };
//   }, []);

  // Render the list of reviews
  // ...
// };

// frontend/src/components/CommentsList.js
// import React, { useEffect, useState } from 'react';
// import socket from '../socket';

// const CommentsList = () => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     socket.on('newComment', (comment) => {
//       setComments((prevComments) => [...prevComments, comment]);
//     });

//     return () => {
//       socket.off('newComment');
//     };
//   }, []);

  // Render the list of comments
  // ...
// };





// FORMS

// frontend/src/components/PostForm.js
// import React, { useState } from 'react';
// import socket from '../socket';
// import axios from 'axios';

// const PostForm = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim() || !content.trim()) return;

//     try {
//       const response = await axios.post('/api/posts', { title, content });
//       const newPost = response.data;

//       socket.emit('newPost', newPost);

//       setTitle('');
//       setContent('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

  // Render the form
  // ...
// };

// frontend/src/components/ReviewForm.js
// import React, { useState } from 'react';
// import socket from '../socket';
// import axios from 'axios';

// const ReviewForm = () => {
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     try {
//       const response = await axios.post('/api/reviews', { content });
//       const newReview = response.data;

//       socket.emit('newReview', newReview);

//       setContent('');
//     } catch (error) {
//       console.error('Error creating review:', error);
//     }
//   };

  // Render the form
  // ...
// };

// frontend/src/components/CommentForm.js
// import React, { useState } from 'react';
// import socket from '../socket';
// import axios from 'axios';

// const CommentForm = () => {
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     try {
//       const response = await axios.post('/api/comments', { content });
//       const newComment = response.data;

//       socket.emit('newComment', newComment);

//       setContent('');
//     } catch (error) {
//       console.error('Error creating comment:', error);
//     }
//   };

  // Render the form
  // ...
// };