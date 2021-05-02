import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes'

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

const commentReducer = (commentState = COMMENTS, commentAction) => {
    switch (commentAction.type) {
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
    comments: commentReducer
})