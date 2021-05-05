import { combineReducers } from 'redux';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';

const dishedReducer = (dishState = { isLoading: false, dishes: [] }, dishAction) => {
    switch (dishAction.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: dishAction.payload
            }
        default:
            return dishState;
    }
}





const commentReducer = (commentState = { isLoading: true, comments: [] }, commentAction) => {
    switch (commentAction.type) {
        case actionTypes.LOAD_COMMENT:
            return {
                ...commentState,
                isLoading: false,
                comments: commentAction.payload
            };
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            };
        case actionTypes.ADD_COMMENT:
            let comment = commentAction.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }

        default:
            return commentState;
    }
}

// const feedbackReducer = (feedbackState, feedbackAction) => {
//     switch (feedbackAction.type) {
//         case actionTypes.ADD_FEEDBACK:
//             let feedback = feedbackAction.payload;
//             return {
//                 ...commentState,
//                 feedback: feedbackState.feedback.concat(feedback)
//             }
//         default:
//             return feedbackState;
//     }
// }




export const Reducer = combineReducers({
    dishes: dishedReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
});