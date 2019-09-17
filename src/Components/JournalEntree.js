import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";


class Journal extends Component {
    constructor (props){
        super (props);
        this.state = {
            
            }
    }
        render (){
        return (
            <div>
                <h1>Hello World {this.props.location.state} </h1>
            </div>
        );
    }
}

export default Journal; 