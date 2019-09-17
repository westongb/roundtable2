import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WarCouncil from "./warcouncil";



class Entrylist extends Component {
    constructor(props) {
    super (props);
        this.state = {
            KingEntry: [],
            WarriorEntry: [],
            MagicianEntry: [],
            LoverEntry: []
          };
        }
    
       
      handleChange = (event) => {
        event.preventDefault();
        this.setState({ 
                    
                });
        console.log(this.state.Warrior);
        
         }
     


render (props) {
    return (

        <div>
            <div className="JournalForm" >
            <h1>Round Table Entrys</h1>
            <br></br>
            <ul>
                <li>{this.state.King}</li>
                <li>{this.state.Warrior}</li>
                <li>{this.state.Magician}</li>
                <li>{this.state.Lover}</li>
            </ul>
            {/*<button type="submit" onClick={this.PopupOpen}>Submit</button>*/}
            </div>
        <div>
            <WarCouncil
            KingAnswer = {this.state.KingEntry}
            WarriorAnswer = {this.state.WarriorEntry}
            MagicianAnswer = {this.state.MagicianEntry}
            LoverAnswer = {this.state.LoverEntry}
            // onAnswerSubmit = {this.handleChange}
            />
        </div>
    </div>
     );
}
}


export default Entrylist;