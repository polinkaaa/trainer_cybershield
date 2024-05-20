import React from "react";
import { useContext } from "react";
import { Context } from "..";
import NavBar from "../components/NavBar";

const User = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <NavBar />
            <h1>{user.nickname}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default User;