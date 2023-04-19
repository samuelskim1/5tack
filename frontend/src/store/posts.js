import jwtFetch from "./jwt";

const RECEIVE_POSTS = "posts/RECEIVE_POSTS";
const RECEIVE_POST = "posts/RECEIVE_POST";
const REMOVE_POST = "posts/DELETE_POST";
const RECEIVE_USER_POSTS = "posts/RECEIVE_USER_POSTS";
const RECEIVE_GAME_POSTS = "posts/RECEIVE_GAME_POSTS";

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

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const fetchAllPosts = () =>  async dispatch => {
    const res = await jwtFetch('/api/posts');
    const posts = await res.json();
    return dispatch(receivePosts(posts));
}

export const fetchPost = post => async dispatch => {
    const res = await jwtFetch(`/api/posts/${post.id}`);
    const postInfo = await res.json();
    return dispatch(receivePost(postInfo));
}

export const fetchUserPosts = (username) => async dispatch => {
    const res = await jwtFetch(`/api/posts/user/${username}`);
    const userPosts = await res.json();
    return dispatch(receiveUserPosts(userPosts));
}

export const fetchGamePosts = (nameURL) => async dispatch => {
    const res = await jwtFetch(`/api/posts/game/${nameURL}`);
    const gamePosts = await res.json();
    return dispatch(receiveGamePosts(gamePosts));
}


export const createPost = (post) => async dispatch => {
    const res = await jwtFetch(`/api/posts/`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const postData = await res.json();
        dispatch(receivePost(postData));
    }
}

export const updatePost = post => async dispatch => {
    const res = await jwtFetch(`/api/posts/${post.id}`, {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        const updatedPost = await res.json();
        dispatch(receivePost(updatedPost));
    }
}

const postsReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_POSTS:
            return { ...nextState, ...action.posts };
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
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