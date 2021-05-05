import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl'
import axios from 'axios'

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING,
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENT,
    payload: comments
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());

        axios.get(baseUrl + "comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)))
    }
}






export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})


export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
    }
}