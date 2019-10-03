import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WarCouncil from "./warcouncil";
import "./Entrylist.css"
import { createConfigItem } from "@babel/core";
import Table from 'react-bootstrap/Table';
import { tsConditionalType } from "@babel/types";
import Moment from 'react-moment';
import EntryItem from './entry'


class Entrylist extends Component {
    constructor(props) {
    super (props);

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    

    
        this.state = {

            // Input Data

                King: "",
                Warrior: "",
                Magician: "",
                Lover:"",

                newRoundTable: "",
              submitDate: date,
             
                            
          // Stored Arrays
                Entrys: [],

                  setDate:"",
                  Journal:"",
                
              
              
                newEntry:""
          };
        }
    
      


        handleChange = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ [event.target.name]: event.target.value });
            
          }

          handleSubmit = async (event) => {
            event.preventDefault();
            await this.setState({
              setDate: this.state.submitDate,
              Journal: [this.state.King, this.state.Warrior, this.state.Magician, this.state.Lover] ,
              })
            await this.setArray(event);
            await this.setDate(event);
               
        // reset input state
            // await this.setState({
            //     King: "",
            //     Warrior: "",
            //     Magician: "",
            //     Lover: ""
            //       });
                 
            
          }

        /* spread opporator. Add data to array*/ 
        
        setArray = ( event, Date) => {
              event.preventDefault()
              event.stopPropagation()
               this.setState({
              newEntry: [{setDate: this.state.setDate}, {Journal: this.state.Journal}]
              })
            }

        setDate = (data) => {
            this.setState({
            Entrys: [...this.state.Entrys, this.state.newEntry]
                    
            })
        }
     





render () {

  let myItem = this.state.Entrys

  let displayItem = JSON.stringify(myItem)

  console.log(this.state.newRoundTable.submitDate)
    return (
        
        <div>
            <div className="JournalForm" >
           <h1>Round Table Entrys</h1>
           <p>{displayItem}</p>
            <br></br>
            <li>
            
            </li>
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr >
      <th className="dateRow">Date</th>
      <th className="entryRow">Entry</th>
    </tr>
  </thead>
  <tbody>
    <EntryItem  Entrys={this.state.Entrys}  />
    </tbody>
    </Table>
                
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
                        // Date = {this.newRoundTable.submitDate}
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