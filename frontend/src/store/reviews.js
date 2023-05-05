import jwtFetch from "./jwt";

// ACTIONS
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const RECEIVE_UPDATED_REVIEW = "posts/RECEIVE_UPDATED_REVIEW";
const RECEIVE_NEW_REVIEW = "posts/RECEIVE_NEW_REVIEW";
const RECEIVE_USER_REVIEWS = "posts/RECEIVE_USER_REVIEWS";
const REMOVE_REVIEW = "posts/DELETE_REVIEW";
const RECEIVE_REVIEW_ERRORS = "reviews/RECEIVE_REVIEW_ERRORS";
const CLEAR_REVIEW_ERRORS = "reviews/CLEAR_REVIEW_ERRORS";


// ACTION CREATORS
export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveUserReviews = (userReviews) => ({
    type: RECEIVE_USER_REVIEWS,
    userReviews
})

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const receiveUpdatedReview = (updatedReview) => ({
    type: RECEIVE_UPDATED_REVIEW,
    updatedReview
})

export const receiveNewReview = (newReview) => ({
    type: RECEIVE_NEW_REVIEW,
    newReview
})



const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
});

// THUNK
export const fetchReview = reviewId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/reviews/${reviewId}`);
        const review = await res.json();
        return dispatch(receiveReview(review));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
    
}

export const fetchReviews = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/reviews');
        const reviews = await res.json();
        return dispatch(receiveReviews(reviews));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const fetchUserReviews = (username) => async dispatch => {
    const res = await jwtFetch(`/api/reviews/user/${username}`);
    const userReviews = await res.json();
    return dispatch(receiveUserReviews(userReviews));
}

export const createReview = reviewInfo => async dispatch => {
    try {
        const res = await jwtFetch('/api/reviews/', {
            method: "POST",
            body: JSON.stringify(reviewInfo)
        });
        const newReview = await res.json();
        dispatch(receiveNewReview(newReview));
        return [res, newReview];
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const updateReview = reviewInfo => async dispatch => {
    try {
        const res = await jwtFetch(`/api/reviews/${reviewInfo._id}`, {
            method: 'PATCH',
            body: JSON.stringify(reviewInfo)
        });
        const updatedReview = await res.json();
        dispatch(receiveUpdatedReview(updatedReview));
        return [res, updatedReview];
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

export const destroyReview = reviewId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE'
        });
        return dispatch(removeReview(reviewId));
    } catch(err) {
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveErrors(res.errors));
        }
    }
}

// REDUCERS
export const reviewsErrorsReducer = (state = null, action) => {
    switch (action.type) {
      case RECEIVE_REVIEW_ERRORS:
        return action.errors;
      case RECEIVE_REVIEW:
      case RECEIVE_REVIEWS:
      case CLEAR_REVIEW_ERRORS:
        return null;
      default:
        return state;
    }
};

const reviewsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_REVIEW:
            return nextState[action.review.id] = action.review;
        case RECEIVE_REVIEWS:
            return { ...nextState, ...action.reviews };
        case RECEIVE_UPDATED_REVIEW:
            return { ...state, [action.updatedReview._id]: action.updatedReview };
        case RECEIVE_NEW_REVIEW:
            return { [action.newReview._id]: action.newReview, ...state };
        case RECEIVE_USER_REVIEWS:
            return action.userReviews;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;