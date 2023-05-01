import jwtFetch from "./jwt";

const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS";
const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT";
const REMOVE_COMMENT = "comments/DELETE_COMMENT";
const RECEIVE_COMMENT_ERRORS = 'comments/RECEIVE_COMMENT_ERRORS';
const CLEAR_COMMENT_ERRORS = 'comments/CLEAR_USER_ERRORS';


export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});



export const fetchAllComments = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/comments');
        const comments = await res.json();
        return dispatch(receiveComments(comments));
    } catch (err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const fetchComment = comment => async dispatch => {
    try {
        const res = await jwtFetch(`/api/comments/${comment.id}`);
        const commentInfo = await res.json();
        return dispatch(receiveComment(commentInfo));
    } catch (err) {
        const res = await err.json();
        if (res.statusCode === 400) {
        return dispatch(receiveErrors(res.errors));
        }
    }
}

export const createComment = (comment) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/comments/`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const commentData = await res.json();
        dispatch(receiveComment(commentData));
        return commentData;
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const updateComment = comment => async dispatch => {
    try {
        const res = await jwtFetch(`/api/comments/${comment.id}`, {
            method: "PATCH",
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const updatedComment = await res.json();
        dispatch(receiveComment(updatedComment));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const deleteComment = commentId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/comments/${commentId}`, {
            method: "DELETE"
        });
        return dispatch(removeComment(commentId));
    } catch (err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}


export const commentsErrorsReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_COMMENT:
        case RECEIVE_COMMENTS:
        case CLEAR_COMMENT_ERRORS:
            return null;
        default:
            return state;
    }
};



const commentsReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return { ...nextState, ...action.comments };
        case RECEIVE_COMMENT:
            nextState[action.comment._id] = action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return nextState;
    };
};

export default commentsReducer;