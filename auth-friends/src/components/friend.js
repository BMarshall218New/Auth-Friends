import React from "react";

const Friend = ({ friend }) => {
    return (
        <div id={friend.id}>
            <p>Name: {friend.name}</p>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )

}

export default Friend; 