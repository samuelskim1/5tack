import jwtFetch from "./jwt";

const RECEIVE_POSTS = "posts/RECEIVE_POSTS";
// const RECEIVE_POST = "posts/RECEIVE_POST";
const RECEIVE_UPDATED_POST = "posts/RECEIVE_UPDATED_POST";
const RECEIVE_NEW_POST = "posts/RECEIVE_NEW_POST";
const REMOVE_POST = "posts/DELETE_POST";
const RECEIVE_USER_POSTS = "posts/RECEIVE_USER_POSTS";
const RECEIVE_GAME_POSTS = "posts/RECEIVE_GAME_POSTS";
const RECEIVE_POST_ERRORS = "posts/RECEIVE_POST_ERRORS";
const CLEAR_POST_ERRORS = "posts/CLEAR_POST_ERRORS";

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

export const receiveUserPosts = (userPosts) => ({
    type: RECEIVE_USER_POSTS,
    userPosts
})

export const receiveGamePosts = (gamePosts) => ({
    type: RECEIVE_GAME_POSTS,
    gamePosts
})

export const receiveUpdatedPost = (updatedPost) => ({
    type: RECEIVE_UPDATED_POST,
    updatedPost
})

export const receiveNewPost = (newPost) => ({
    type: RECEIVE_NEW_POST,
    newPost
})

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS
});



export const fetchAllPosts = () =>  async dispatch => {
    const res = await jwtFetch('/api/posts');
    const posts = await res.json();
    return dispatch(receivePosts(posts));
}

export const fetchUserPosts = (username) => async dispatch => {
    const res = await jwtFetch(`/api/posts/user/${username}`);

    const data = await res.json();
    if (!data.errors) dispatch(receiveUserPosts(data));
    else dispatch(receiveErrors(data.errors));
    // const userPosts = await res.json();
    // return dispatch(receiveUserPosts(userPosts));
    return data;
}

export const fetchGamePosts = (nameURL) => async dispatch => {
    const res = await jwtFetch(`/api/posts/game/${nameURL}`)
    // .then(async res => {
        const data = await res.json();

        if (!data.errors) dispatch(receiveGamePosts(data));
        else dispatch(receiveErrors(data.errors));
    // });
    // const gamePosts = await res.json();
    // dispatch(receiveGamePosts(gamePosts));
    return data;
}

export const createPost = postInfo => async dispatch => {
    try {
        const res = await jwtFetch(`/api/posts/`, {
            method: "POST",
            body: JSON.stringify(postInfo)
        });
        const newPost = await res.json();
        dispatch(receiveNewPost(newPost));
        return res;
    } catch(err) {
        const res = await err.json();
        if (res.statusText === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const updatedPost = postInfo => async dispatch => {
    try {
        const res = await jwtFetch(`/api/posts/${postInfo._id}`, {
            method: "PATCH",
            body: JSON.stringify(postInfo)
        });
        const updatedPost = await res.json();
        dispatch(receiveUpdatedPost(updatedPost));
        return res;
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const deletePost = postId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/posts/${postId}`, {
            method: "DELETE"
        });
        return dispatch(removePost(postId));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}


// REDUCERS
export const postsErrorsReducer = (state = null, action) => {
    switch (action.type) {
      case RECEIVE_POST_ERRORS:
        return action.errors;
    //   case RECEIVE_POST:
      case RECEIVE_NEW_POST:
      case RECEIVE_UPDATED_POST:
      case RECEIVE_POSTS:
      case CLEAR_POST_ERRORS:
        return null;
      default:
        return state;
    }
};


const postsReducer = (state = {}, action) => {
    const nextState = {...state}
    switch (action.type) {
        case RECEIVE_POSTS:
            return { ...action.posts };
        case RECEIVE_UPDATED_POST:
            return { ...state, [action.updatedPost._id]: action.updatedPost };
        case RECEIVE_NEW_POST:
            return { [action.newPost._id]: action.newPost, ...state };
        case RECEIVE_USER_POSTS:
            return action.userPosts;
        case RECEIVE_GAME_POSTS:
            return action.gamePosts;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return nextState;
    };
};

export default postsReducer;