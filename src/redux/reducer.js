import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';


const dishedReducer = (dishState = DISHES, dishAction) => {
    return dishState;
}

const commentReducer = (commentState = COMMENTS, commentAction) => {
    if (commentAction.type === 'ADD_COMMENT') {
        let comment = commentAction.payload;
        comment.id = commentState.length;
        comment.date = new Date().toDateString()
        return commentState.concat(comment)
    }
    return commentState;
}


export const Reducer = combineReducers({
    dishes: dishedReducer,
    comments: commentReducer
})