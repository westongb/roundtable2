import React, { Component, useMemo, useState, useContext, useEffect } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./Menu.css";
import Home from "./Components/Home";
import about from "./Components/about";
import Entrylist from "./Components/roundtable/Entrylist"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Roundtable from "./Components/roundtable/warcouncil";
import Story from "./Components/Story/Story"
import storyList from "./Components/Story/storyList";
import LoginScreen from "./Components/Authentication/LoginScreen";
import CreateUser from "./Components/Authentication/CreateUser";
import {LoginContext, LoginProvider, LoginConsumer} from './Components/Authentication/isAuthenticated';
import LogOutButton from './Components/Authentication/LogOutButton'

export default function Menu() {

 
       const {user,token} = useContext(LoginContext)

       const [userName, setUserName] = useState()

       const [tokenAuth, setTokenAuth] = useState()

    
       
    
    // const providerValue = useMemo(()=> ({verifiedUser,setVerifiedUser}), [verifiedUser, setVerifiedUser])

  
    return (
     
      <Router>
        <div className="Menu">
          <h2>King of the Kingdom</h2>
          <nav>
            <span className="menuItems">
              <Link to="/Home">Home</Link>
                <Link to= {{pathname:"/roundtableapp/Entrylist", props:{userName:{user}, tokenAuth:{token}}}}>Round Table</Link>
              <Link to='/story'>Story</Link>
              <Link to='/login'>Login</Link>
              <LoginContext.Consumer>
               {render=> {
             return <span><span className='userAvater'><img className='Avatar' src='https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg'/><p>{user}</p></span><span><LogOutButton/></span></span>}}
             </LoginContext.Consumer>

              {/* <Link to="/about">About</Link> */}
            </span>
            <div>{}</div>
          </nav>
        </div>
       
          <Route path="/Home" exact component={Home}  />
          <Route path="/about" exact component={about} />
          <Route path="/roundtableapp/Entrylist" exact component={Entrylist} />
          <Route path="/story" exact component={storyList}/>
          <Route path="/login" exact component={LoginScreen}/>
          <Route path="/login/createUser" exact component={CreateUser}/>
         
    
        </Router>
      
      
    );
  }



