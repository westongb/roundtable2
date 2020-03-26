import React, { Component } from "react";
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

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <div>{this.answerIsThere}</div>
          </nav>
        </div>

        <Route path="/Home" exact component={Home}  />
        <Route path="/about" exact component={about} />
        <Route path="/roundtableapp/Entrylist" exact component={Entrylist} />
        <Route path="/story" exact component={storyList}/>
        <Route path="/login" exact component={LoginScreen}/>
        <Route path="/login/createUser" exact component={CreateUser}/>
        {/* <Route path="/roundtable" exact component={Roundtable} /> */}
        </Router>
    );
  }
}

export default Menu;
