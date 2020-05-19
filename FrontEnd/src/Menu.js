import React, { Component, useMemo, useState, useContext, useEffect } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./Menu.css";
import Home from "./Components/Home";
import about from "./Components/about";
import Entrylist from "./Components/roundtable/Entrylist"
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import storyList from "./Components/Story/storyList";
import LoginScreen from "./Components/Authentication/LoginScreen";
import CreateUser from "./Components/Authentication/CreateUser";
import {LoginContext, LoginProvider, LoginConsumer} from './Components/Authentication/isAuthenticated';
import LogOutButton from './Components/Authentication/LogOutButton'

export default function Menu() {

 
       const {user,token, loggedIn} = useContext(LoginContext)

       const [userName, setUserName] = useState()

       const [tokenAuth, setTokenAuth] = useState()

    
       
    
    // const providerValue = useMemo(()=> ({verifiedUser,setVerifiedUser}), [verifiedUser, setVerifiedUser])

  
    return (
     
      <Router>
        <div className="Menu">
          <h2 className="website-title">King of the Kingdom</h2>
          <nav>
            <span className="menuItems">
              <Link to="/"><h4>Home</h4></Link>
                <Link to= {{pathname:"/roundtableapp/Entrylist", props:{userName:{user}, tokenAuth:{token}}}}><h4>Round Table</h4></Link>
              <Link to='/story'><h4>Story</h4></Link>
              <Link to='/login'><h4>Login</h4></Link>
              <LoginContext.Consumer>
               {render=> {
             return <span className="loggedInMenu"><span className='userAvater'><img className='Avatar' src='https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg'/><p>{user}</p></span><span><LogOutButton/></span></span>}}
             </LoginContext.Consumer>

              {/* <Link to="/about">About</Link> */}
            </span>
            <div>{}</div>
          </nav>
        </div>
       
          <Route path="/" exact component={Home}  />
          <Route path="/about" exact component={about} />
          <Route path="/roundtableapp/Entrylist" exact component={Entrylist} ></Route>
          <Route path="/story" exact component={storyList}/>
          <Route path="/login" exact component={LoginScreen}/>
          <Route path="/login/createUser" exact component={CreateUser}/>
         
    
        </Router>
      
      
    );
  }



