import React from 'react'

const Comment = ({ comment }) => {
    return (
        <div style={{ marginBottom: "30px" }}>
            <p>{comment.username}</p>
            <p>{comment.userLogo}</p>
            <p>{comment.createdAt}</p>
            <p>{comment.description}</p>
            {comment.img?.map((item) => {
                return (
                    <img src={item.img} alt="img" />
                )
            })}
            <p>{comment.stars}</p>
            <p>{comment.likes}</p>
        </div>
    )
}

export default Comment