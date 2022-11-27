import React from "react";

export default ({comments}) => {

    const renderComments = comments.map(comment => {
        let content;

        if(comment.status === 'approved'){
            content = comment.content
        }

        if(comment.status === 'pending'){
            content = 'This comment is awaiting moderations';
        }

        if(comment.status === 'rejected'){
            content = 'This comment has been rejected'
        }

        return <li key={comment.id}>{content}</li>
    })

    return (
        <div>
            {renderComments}
        </div>
    )
}