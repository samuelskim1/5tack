import jwtFetch from "./jwt";

// ACTION TYPES
const RECEIVE_USER = 'users/RECEIVE_USER';
const RECEIVE_ALL_USERS = 'users/RECEIVE_ALL_USERS';


// ACTIONS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllusers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});


// THUNK
export const fetchAllUsers = () => async dispatch => {
  try {
    const res = await jwtFetch('/api/users');
    console.log(res);
  } catch(err) {
    console.log(err);
  } 
};


// REDUCER
const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
};

export default usersReducer;