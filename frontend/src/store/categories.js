import jwtFetch from "./jwt";

// ACTIONS
const RECEIVE_CATEGORY = "categories/RECEIVE_CATEGORY";
const RECEIVE_CATEGORIES = "categories/RECEIVE_CATEGORIES";
// const RECEIVE_CATEGORIES_ERRORS = "categories/RECEIVE_CATEGORIES_ERRORS";
// const CLEAR_CATEGORIES_ERRORS = "categories/CLEAR_CATEGORIES_ERRORS";

// ACTION CREATORS
export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})

// const receiveErrors = errors => ({
//     type: RECEIVE_CATEGORIES_ERRORS,
//     errors
// });

// export const clearCategoriesErrors = () => ({
//     type: CLEAR_CATEGORIES_ERRORS
// });

// THUNK
export const fetchCategory = category => async dispatch => {
        const res = await jwtFetch(`/api/categories/${category.id}`);
        const categoryInfo = await res.json();
        return dispatch(receiveCategory(categoryInfo));
}

export const fetchCategories = () => async dispatch => {
        const res = await jwtFetch('/api/categories');
        const categories = await res.json();
        return dispatch(receiveCategories(categories));
}

// REDUCERS

// export const categoriesErrorsReducer = (state=null, action) => {
//     switch (action.type) {
//         case RECEIVE_CATEGORIES_ERRORS:
//             return action.errors;
//         default:
//             break;
//     }
// }

const categoriesReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return { ...state, [action.category.id]: action.category };
        case RECEIVE_CATEGORIES:
            return { ...action.categories };
        default:
            return state;
    }
}

export default categoriesReducer;