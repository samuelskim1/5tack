import jwtFetch from "./jwt";

// ACTION TYPES
const RECEIVE_USER = 'users/RECEIVE_USER';
const RECEIVE_ALL_USERS = 'users/RECEIVE_ALL_USERS';
const RECEIVE_USER_ERRORS = 'users/RECEIVE_USER_ERRORS';
const CLEAR_USER_ERRORS = 'users/CLEAR_USER_ERRORS';


// ACTIONS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllusers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});


// THUNK
export const fetchAllUsers = () => async dispatch => {
  try {
    const res = await jwtFetch('/api/users');
    const user = await res.json();
    return dispatch(receiveUser(user));
  } catch(err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveErrors(res.errors));
    }
  } 
};

export const fetchUser = username => async dispatch => {
  try {
    const res = await jwtFetch(`/api/users/${username}`)
    const user = await res.json();
    return dispatch(receiveUser(user));
  } catch(err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveErrors(res.errors));
    }
  }
}


// REDUCER
export const userErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
    case RECEIVE_ALL_USERS:
    case CLEAR_USER_ERRORS:
      return null;
    default:
      return state;
  }
}

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return { ...state, ...action.users };
    case RECEIVE_USER:
      return { ...state, [action.user.username]: action.user };
    default:
      return state;
  }
};

export default usersReducer;