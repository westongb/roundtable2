import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./Menu.css";
import warCouncil from "./Components/warcouncil";
import Home from "./Components/Home";
import about from "./Components/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="Menu">
          <h2>Kings Table</h2>
          <nav>
            <span className="menuItems">
              <Link to="/about">About</Link>
              <Link to="/Home">Home</Link>
              <Link to="/roundtable">Round Table</Link>
            </span>
          </nav>
        </div>

        <Route path="/Home" exact component={Home} />
        <Route path="/about" exact component={about} />
        <Route path="/roundtable" exact component={warCouncil} />
      </Router>
    );
  }
}

export default Menu;
