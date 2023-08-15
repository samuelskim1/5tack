import jwtFetch from "./jwt";

// ACTION TYPES
const RECEIVE_CURRENT_USER = 'session/RECEIVE_CURRENT_USER';
const RECEIVE_SESSION_ERRORS = 'session/RECEIVE_SESSION_ERRORS';
const CLEAR_SESSION_ERRORS = 'session/CLEAR_SESSION_ERRORS';
export const RECEIVE_LOGOUT = 'session/RECEIVE_LOGOUT';


// ACTIONS
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const logoutUser = () => ({
  type: RECEIVE_LOGOUT
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});


// THUNK
export const signup = user => startSession(user, 'api/users/register');
export const login = user => startSession(user, 'api/users/login');

const startSession = (userInfo, route) => async dispatch => {
    const res = await jwtFetch(route, {
      method: "POST",
      body: JSON.stringify(userInfo)
    })
    .then(async res => {
      const data = await res.json();

      if (!data.errors) {
        const { user, token } = data;
        localStorage.setItem('jwtToken', token);
        return dispatch(receiveCurrentUser(user));
      } else {
        dispatch(receiveErrors(data.errors))
      }
    });

};

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  dispatch(logoutUser());
};

export const updateUser = (userInfo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('username', userInfo.username);
    formData.append('email', userInfo.email);
    formData.append('description', userInfo.description);
    formData.append('profileImageUrl', userInfo.photo || userInfo.profileImageUrl);
    
    // formData requires this format in order to correctly parse data in array structure
    // furthermore, formData converts empty arrays to empty strings: [] -> ''
    // there is logic in the frontend to essentially ignore/delete the empty string
    if (userInfo.playStyle.length) {
      userInfo.playStyle.forEach(style => {
        formData.append('playStyle[]', style)
      })
    } else {
      formData.append('playStyle[]', '')
    }

    if (userInfo.favorites.length) {
      userInfo.favorites.forEach(fave => {
        formData.append('favorites[]', fave)
      })
    } else {
      formData.append('favorites[]', '')
    }

    const res = await jwtFetch(`/api/users/${userInfo._id}`, {
      method: 'PATCH',
      // body: JSON.stringify(userInfo)
      body: formData
    });
    const user = await res.json();
    dispatch(receiveCurrentUser(user));
    return res;
  } catch(err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveErrors(res.errors));
    }
  }
}

export const getCurrentUser = () => async dispatch => {
  const res = await jwtFetch('/api/users/current');
  const user = await res.json();
    return dispatch(receiveCurrentUser(user));
};


// REDUCERS
export const sessionErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return null;
    default:
      return state;
  }
};

const initialState = {
  user: undefined
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { user: action.currentUser };
    case RECEIVE_LOGOUT:
      return initialState;
    default: 
      return state;
  }
};

export default sessionReducer;