import React from "react";

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid black',
            borderRadius: '5px',
            width: '200px',
            height: 'auto',
            backgroundColor: '0f0f0f',
            padding: '10px'
        }}>
            {children}
        </div>
    )
}

export default Card;