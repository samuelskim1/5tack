import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { userErrorsReducer } from './users';
import { postsErrorsReducer } from './posts';
import { commentsErrorsReducer } from './comments';
import { reviewsErrorsReducer } from './reviews';
import { gameErrorsReducer } from './games';

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  posts: postsErrorsReducer,
  comments: commentsErrorsReducer,
  reviews: reviewsErrorsReducer,
  games: gameErrorsReducer
});