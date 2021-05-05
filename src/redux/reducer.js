import { combineReducers } from 'redux';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';

const dishedReducer = (dishState = { isLoading: false, dishes: [], errMess: null }, dishAction) => {
    switch (dishAction.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMess: null,
                dishes: dishAction.payload
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: dishAction.payload,
                dishes: []
            }
        default:
            return dishState;
    }
}





const commentReducer = (commentState = { isLoading: true, comments: [], errMess: null }, commentAction) => {
    switch (commentAction.type) {
        case actionTypes.LOAD_COMMENT:
            return {
                ...commentState,
                isLoading: false,
                errMess: null,
                comments: commentAction.payload
            };
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                errMess: null,
                comments: []
            };
        case actionTypes.ADD_COMMENT:
            let comment = commentAction.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        case actionTypes.COMMENT_FAILED:
            return {
                ...commentState,
                isLoading: false,
                errMess: commentAction.payload,
                comments: []
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