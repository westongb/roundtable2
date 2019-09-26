import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WarCouncil from "./warcouncil";
import "./Entrylist.css"
import { createConfigItem } from "@babel/core";



class Entrylist extends Component {
    constructor(props) {
    super (props);
        this.state = {

            // Input Data
            King: "",
            Warrior: "",
            Magician: "",
            Lover: "",
            submitDate: "",

            // Stored Arrays
                NewEntry: "",
              
            
                newRoundTable: [{submitDate: ""}, {King: ""}, {Warrior: ""}, {Magician: ""}, {Lover: ""}],
              
          };
        }
    
       
        handleChange = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ [event.target.name]: event.target.value });
            
          }

          handleSubmit = async (event) => {
            event.preventDefault();
          
            await this.setState(
              { 
              King: this.state.King,
              Warrior : this.state.Warrior,
              Magician : this.state.Magician,
              Lover : this.state.Lover
              });
              
            await this.setDate(event);
            await this.setArray(event);
               
               
        // reset input state
            await this.setState({
                King : "",
                Warrior : "",
                Magician : "",
                Lover : ""
                  });
                 
            
          }

        /* spread opporator. Add data to array*/ 
        
        setArray = ( event, Date, Answer) => {
              event.preventDefault()
              event.stopPropagation()
            this.setState({
              NewEntry : [...this.state.NewEntry, this.state.newRoundTable],
                }
            )
        }

        setDate = (data) => {
            this.setState({
            newRoundTable: [{setDate: this.submitDate}, {King: this.state.King}, {Warrior: this.state.Warrior}, { Magician: this.state.Magician}, {Lover: this.state.Lover}],
            setDate: Date.now()
            })
            
        }
     
        
      


render () {
  

    return (

        <div>
            <div className="JournalForm" >
            <h1>Round Table Entrys</h1>
            <br></br>
            <div>
               <ul>
                    <li>{}</li>
                      </ul>
            </div>

            {/* <ul>
                <li>{this.state.KingEntry}<button >Edit</button></li>
                <li>{this.state.WarriorEntry}</li>
                <li>{this.state.MagicianEntry}</li>
                <li>{this.state.LoverEntry}</li>
            </ul> */}

            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">New Entry</button>
            </div>
        
        <div className="myModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                     <div class="modal-body">


        {/* Add componet warcouncil */}
                        <WarCouncil
                        King = { this.state.King}
                        Warrior = {this.state.Warrior}
                        Magician = {this.state.Magician}
                        Lover = {this.state.Lover}
                        Date = {this.submitDate}
                        onAnswerChange = {this.handleChange}
                        onAnswerSubmit = {this.handleSubmit}/>


                    </div>
                <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
               </div>
            </div>
        </div>
        </div>

     );
}
}


export default Entrylist;