import { combineReducers } from 'redux';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';
import { act } from 'react-dom/test-utils';

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
            comment.id = commentState.length;
            comment.date = new Date().toDateString()
            return commentState.concat(comment)

        default:
            return commentState;
    }
}


export const Reducer = combineReducers({
    dishes: dishedReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
});