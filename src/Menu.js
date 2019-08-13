import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./Menu.css";
import roundtable from "./Components/warcouncil";
import Home from "./Components/Home";
import about from "./Components/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state= {
      warriorAnswer:"try this"
    }
  }

  answerIsThere () {
    const {props} = this.state.warriorAnswer;
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
              <Link to= {{pathname: "/roundtable", state:{
                warriorAnswer: ""}
              } }>Round Table</Link>
            </span>
            <div>{this.answerIsThere}</div>
          </nav>
        </div>

        <Route path="/Home" exact component={Home}  />
        <Route path="/about" exact component={about} />
        <Route path="/roundtable" exact component={roundtable} />
      </Router>
    );
  }
}

export default Menu;
