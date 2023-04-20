import jwtFetch from "./jwt";

const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS";
const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT";
const REMOVE_COMMENT = "comments/DELETE_COMMENT";
const RECEIVE_USER_COMMENTS = "comments/RECEIVE_USER_COMMENTS";
const RECEIVE_GAME_COMMENTS = "comments/RECEIVE_GAME_COMMENTS";

export const receiveComments = (comments) => ({
    type: RECEIVE_commentS,
    comments
});

export const receiveUserComments = (userComments) => ({
    type: RECEIVE_USER_commentS,
    userComments
})

export const receiveGameComments = (gameComments) => ({
    type: RECEIVE_GAME_commentS,
    gameComments
})

export const receiveComment = (comment) => ({
    type: RECEIVE_comment,
    comment
});

export const removeComment = (commentId) => ({
    type: REMOVE_comment,
    commentId
});

export const fetchAllComments = () => async dispatch => {
    const res = await jwtFetch('/api/comments');
    const comments = await res.json();
    return dispatch(receiveComments(comments));
}

export const fetchComment = comment => async dispatch => {
    const res = await jwtFetch(`/api/comments/${comment.id}`);
    const commentInfo = await res.json();
    return dispatch(receiveComment(commentInfo));
}

export const fetchUserComments = (username) => async dispatch => {
    const res = await jwtFetch(`/api/comments/user/${username}`);
    const userComments = await res.json();
    return dispatch(receiveUserComments(userComments));
}

export const fetchGameComments = (nameURL) => async dispatch => {
    const res = await jwtFetch(`/api/comments/game/${nameURL}`);
    const gameComments = await res.json();
    return dispatch(receiveGameComments(gameComments));
}


export const createComment = (comment) => async dispatch => {
    const res = await jwtFetch(`/api/comments/`, {
        method: "comment",
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const commentData = await res.json();
        dispatch(receiveComment(commentData));
    }
}

export const updateComment = comment => async dispatch => {
    const res = await jwtFetch(`/api/comments/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        const updatedComment = await res.json();
        dispatch(receiveComment(updatedComment));
    }
}

const commentsReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_commentS:
            return { ...nextState, ...action.comments };
        case RECEIVE_comment:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case RECEIVE_USER_commentS:
            return action.userComments;
        case RECEIVE_GAME_commentS:
            return action.gameComments;
        case REMOVE_comment:
            delete nextState[action.commentId];
            return nextState;
        default:
            return nextState;
    };
};

export default commentsReducer;