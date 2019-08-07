import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import WarCouncil from "./Components/warcouncil";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import about from "./Components/about";
import Home from "./Components/Home";

class App extends Component {
  render(props) {
    const warriorAnswer = "";
    return (
      <div>
        <Router>
          <Menu />
          <Route path={"about"} component={about} />
          <Route path={"Home"} component={Home} />
          <Route
            path={"warcouncil"}
            render={props => <warCouncil {...props} warriorAnswer="Answer" />}
          />
        </Router>
      </div>
    );
  }
}
export default App;
