import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Roundtable from "./warcouncil";
import Entrylist from "./Entrylist";


class roundtableapp extends Component {
    super (props) {
        this.state = {
            King: "",
            Warrior: "",
            Magician: "",
            Lover: ""
        }
    }

render() {
    return (
        <div>
            <Router>
            {/* <h1>Round Table</h1>
            <Route path="/roundtableapp/Entrylist" exact component={Entrylist} />
            <Route 
            path="/roundtableapp/roundtable" 
            exact component={Roundtable}/>
            <br></br> */}
            
        </Router>
    </div>
     );
}
}


export default roundtableapp;