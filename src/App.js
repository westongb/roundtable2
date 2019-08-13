import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import WarCouncil from "./Components/warcouncil";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import about from "./Components/about";
import Home from "./Components/Home";
import Journal from "./Components/JournalEntree";

class App extends Component {
state = {
}


  render(props) {
    return (
      <div>
        <Router>
          <Menu />
          <Route path={"about"} component={about} />
          <Route path={"Home"} component={Home} />
          <Route
            path={"warcouncil"}
            component={WarCouncil}
            />
            <Route path={"/roundtable/journal"} component={Journal}/>
        </Router>
      </div>
    );
  }
}
export default App;
