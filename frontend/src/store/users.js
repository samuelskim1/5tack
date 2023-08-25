import jwtFetch from "./jwt";
import { receiveUpdatedReview } from "./reviews";
import { RECEIVE_UPDATED_REVIEW } from "./reviews";
// ACTION TYPES
const RECEIVE_USER = 'users/RECEIVE_USER';
const RECEIVE_ALL_USERS = 'users/RECEIVE_ALL_USERS';
const RECEIVE_UPDATED_USER = "users/RECEIVE_UPDATED_USER";
const RECEIVE_USER_ERRORS = 'users/RECEIVE_USER_ERRORS';
const CLEAR_USER_ERRORS = 'users/CLEAR_USER_ERRORS';


// ACTIONS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUpdatedUser = (updatedUser) => ({
  type: RECEIVE_UPDATED_USER,
  updatedUser
})

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});


// THUNK
export const fetchAllUsers = () => async dispatch => {
  try {
    const res = await jwtFetch('/api/users');
    const users = await res.json();
    return dispatch(receiveAllUsers(users));
  } catch(err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveUserErrors(res.errors));
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
    if (res.statusCode >= 400) {
      dispatch(receiveUserErrors(res.errors));
      return res;
    }
  }
};

export const fetchAverageRating = username => async dispatch => {
  try {
    const res = await jwtFetch(`/api/users/${username}/average`);
    const data = await res.json();
    return data.averageRating;
  } catch (err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveUserErrors(res.errors));
    }
  }
}

export const updateUser = userInfo => async dispatch => {
  try {
    const res = await jwtFetch(`/api/users/${userInfo._id}`, {
      method: "PATCH",
      body: JSON.stringify(userInfo)
    });
    const updatedUser = await res.json();
    dispatch(receiveUpdatedUser(updatedUser));
    return res;
  } catch (err) {
    const res = await err.json();
    if (res.statusCode >= 400) {
      return dispatch(receiveUserErrors(res.errors));
    }
  }
}

export const searchUser = userInfo => async dispatch => {
  try {
    const res = await jwtFetch('/api/users/search', {
      method: "POST",
      body: JSON.stringify(userInfo)
    })
    const things = await res.json();
    console.log(things);
  } catch (err) {
    console.log(err.json());
  }
};


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
};

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return { ...state, ...action.users };
    case RECEIVE_USER:
      return { ...state, [action.user.username]: action.user };
    case RECEIVE_UPDATED_USER:
      return { ...state, [action.updatedUser.username]: action.updatedUser };
    // case RECEIVE_UPDATED_REVIEW:
    //   return { ...state, action.updatedReview }
    default:
      return state;
  }
};

export default usersReducer;