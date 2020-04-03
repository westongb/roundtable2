import React, { Component, useMemo, useState } from "react";
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
import {UserContext} from './Components/Authentication/isAuthenticated';

export default function Menu() {

    const [user, setUser] = useState(null);

    const handleUser =  event => {
      setUser(event.target.value)
    }

    // const providerValue = useMemo(()=> ({verifiedUser,setVerifiedUser}), [verifiedUser, setVerifiedUser])

 
    return (
      <Router>
        <div className="Menu">
          <h2>King of the Kingdom</h2>
          <nav>
            <span className="menuItems">
              <Link to="/Home">Home</Link>
              <Link to= "/roundtableapp/Entrylist">Round Table</Link>
              <Link to='/story'>Story</Link>
              <Link to='/login'>Login</Link>
              {/* <Link to="/about">About</Link> */}
            </span>
            <div>{}</div>
          </nav>
        </div>
        <UserContext.Provider value={user}>
          <Route path="/Home" exact component={Home}  />
          <Route path="/about" exact component={about} />
          <Route path="/roundtableapp/Entrylist" exact component={Entrylist} />
          <Route path="/story" exact component={storyList}/>
          <Route path="/login" exact render={()=> <LoginScreen handleUser={handleUser}/>}/>
          <Route path="/login/createUser" exact component={CreateUser}/>
          {/* <Route path="/roundtable" exact component={Roundtable} /> */}
        </UserContext.Provider>
        </Router>
    );
  }



