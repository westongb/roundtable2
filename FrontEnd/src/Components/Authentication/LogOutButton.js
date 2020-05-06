import React, { useState, useEffect, useContext } from "react";
import {LoginContext } from "./isAuthenticated";


export default function LogOutButton () {

    const {user, setUser, loggedIn, setLoggedIn, token, writeToken} = useContext(LoginContext);

    return (
        <button onClick={()=>{     
            setUser('')
            writeToken(null)
            setLoggedIn("Logged Out")}
        }>Log Out</button>
    )

}