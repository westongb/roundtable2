import React, { useState, useEffect, useContext } from "react";
import path from "path";
import './loginScreen.css'
import { BrowserRouter as Router, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CreateUser from "./CreateUser";
import {LoginContext } from "./isAuthenticated";
import { Alert } from "@primer/octicons-react";
import {uriBase} from "../../consts"


export default function LoginScreen(props){

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));

const classes = useStyles();

const {user, setUser, loggedIn, setLoggedIn, token, writeToken} = useContext(LoginContext);

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');


const veryifyLogin= (res, props) => {
    fetch(`${uriBase}/login/${userName}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userName: userName,
            password: password
        })
        
    }).then(  
        res => res.json()
    ).then(
        function (data) {
            if(data.userName=== 'Incorrect User Name'){
                window.alert("Incorrect User Name or Password")
            } else {
                if(data.password === 'Incorrect password') {
                    window.alert("Incorrect User Name or Password")
                } else{
               setUser(userName)
               writeToken(data.TokenAuth)
               setLoggedIn(true)
               routeChange()
            }
        }
        }
    )
}



const submitHandler = (event) =>{
    event.preventDefault()
    veryifyLogin(event)
}

let history = useHistory();
let location = useLocation();

let { from } = location.state || { from: { pathname: "/" } };

 function routeChange() {
    history.replace(from);
  }



return (
    <div className='loginBox'>
        <h1>Login</h1>
        <br></br>
            <form className='loginForm' onSubmit={submitHandler}>
            <div className="formInput">
             <label>Username/Email Address</label>
             <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
             </div>
             <br></br>
             <div className="formInput">
            <label>Password </label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        </div>
        <br></br>
        <Button variant="contained" size="medium" color="primary" id="formButton" type="submit" className={classes.margin}>Login</Button>
    </form>
    <br></br>
    <Button variant="contained" size="medium" color="primary"  id="formButton" className={classes.margin}><Link to="/login/CreateUser" className='menuLink'>CreateUser</Link></Button>
    </div>
    
)

}