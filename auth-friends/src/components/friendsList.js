import React, { useState, useEffect } from "react";
import Friend from "./friend";
import axiosWithAuth from "../Utils/axiosWithAuth";

export const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("data from friends list: ", res)
                setFriends(res.data);
            })
            .catch(err => {
                console.log("friends list axios error: ", err)
            })
    }, []);

    return (
        <div>
            <h2>Friends List</h2>
            {friends.map(friend => (
                <Friend friend={friend} />
            ))}
        </div>
    )
}