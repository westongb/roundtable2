import React, { createContext} from "react";

import "./App.css";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import about from "./Components/about";
import Home from "./Components/Home";
import Journal from "./Components/JournalEntree";
import Roundtable from "./Components/roundtable/warcouncil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginProvider} from './Components/Authentication/isAuthenticated';

export default function App() {




    return (
      <div>
        <LoginProvider>
        <Router>
          <Menu />
          {/* <Route path={"about"} component={about} />
          <Route path={"Home"} component={Home} />
          <Route
            path={"roundtable"}
            component = {Roundtable}
            />
            <Route path={"/roundtable/journal"} component={Journal}/> */}
        </Router>
        </LoginProvider>
      </div>
    );
  }

