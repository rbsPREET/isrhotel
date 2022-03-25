import React from 'react'
import Comment from "../../ui/Comment";

const CommentsList = ({ comments }) => {
    return (
        <>
            {comments?.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment} />
                )
            })}
        </>
    )
}

export default CommentsList