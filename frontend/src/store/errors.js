import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { userErrorsReducer } from './users';
import { postsErrorsReducer } from './posts';

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  posts: postsErrorsReducer
});