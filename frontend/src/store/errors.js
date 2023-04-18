import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { userErrorsReducer } from './users';

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer
});