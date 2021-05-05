import React from 'react';
import dateformat from 'dateformat';
import { baseUrl } from '../../redux/baseUrl';
import Loading from './Loading';

const LoadComments = props => {
    if (props.commentIsLoading) {
        return <Loading />
    } else {
        return (
            props.comment.map(item => {
                return (
                    <div key={item.id}>
                        <h5>{item.author}</h5>
                        <p>{item.comment}</p>
                        <p>Rating: {item.rating}</p>
                        <p>{dateformat(item.date, "dddd, mmmm ds, yyyy h:MM:ss TT")}</p>
                    </div>
                );
            })
        );
    }

}

export default LoadComments;