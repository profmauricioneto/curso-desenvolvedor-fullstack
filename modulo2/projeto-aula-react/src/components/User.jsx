import React from "react";
import 'User.css';

const User = (props) => {
    return (
        <>
            <div className="p-4 border-2 rounded-lg">
                <h2>Name: {props.name} - Age: {props.age}</h2>
            </div>
        </>
    )
}

export default User;