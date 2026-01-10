import React from "react";

const Post = (props) => {
    return (
        <div className="p-2">
            <p>{props.title} - {props.body}</p>
        </div>
    )
}

export default Post;