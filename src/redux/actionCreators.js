import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl'
import axios from 'axios'

export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post(baseUrl + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})




// export const addFeedback = (firstName, lastName, phone, email, agree, message) => dispatch => {
//     const newFeedback = {
//         firstName: firstName,
//         lastName: lastName,
//         phone: phone,
//         email: email,
//         agree: agree,
//         message: message,
//     }
//     axios.post(baseUrl + 'feedback', newFeedback)
//         .then(response => response.data)
//         .then(feedback => dispatch(feedbackConcat(feedback)))
// }

// export const feedbackConcat = (feedback) => ({
//     type: actionTypes.ADD_FEEDBACK,
//     payload: feedback
// })



export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING,
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENT,
    payload: comments
})

export const commentFailed = (errMess) => ({
    type: actionTypes.COMMENT_FAILED,
    payload: errMess
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());

        axios.get(baseUrl + "comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)))
            .catch(error => dispatch(commentFailed(error.message)))
    }
}


export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})


export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})


export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess
})


export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
    }
}