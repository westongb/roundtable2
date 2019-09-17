import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./Menu.css";
import Home from "./Components/Home";
import about from "./Components/about";
import Entrylist from "./Components/Entrylist"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Roundtable from "./Components/warcouncil";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log (this.answerIsThere)
    return (
      <Router>
        <div className="Menu">
          <h2>Kings Table</h2>
          <nav>
            <span className="menuItems">
              <Link to="/about">About</Link>
              <Link to="/Home">Home</Link>
              <Link to= "/roundtableapp/Entrylist">Round Table</Link>
            </span>
            <div>{this.answerIsThere}</div>
          </nav>
        </div>

        <Route path="/Home" exact component={Home}  />
        <Route path="/about" exact component={about} />
        <Route path="/roundtableapp/Entrylist" exact component={Entrylist} />
        <Route path="/roundtable" exact component={Roundtable} />
        </Router>
    );
  }
}

export default Menu;
