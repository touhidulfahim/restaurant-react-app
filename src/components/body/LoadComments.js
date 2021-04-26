import React from 'react';
import dateformat from 'dateformat'


const LoadComments = props => {
    return (
        props.comment.map(item => {
            return (
                <div key={item.id}>
                    <h5>{item.author}</h5>
                    <p>{item.comment}</p>
                    <p>{dateformat(item.date, "dddd, mmmm ds, yyyy h:MM:ss TT")}</p>
                </div>
            );
        })
    );
}

export default LoadComments;