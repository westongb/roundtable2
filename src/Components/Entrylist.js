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
            newRoundTable: {

              submitDate: date,
              Journal : [
                      King= "",
                      Warrior = "",
                      Magician= "",
                      Lover= ""
              ]
          },
 
            // Stored Arrays
                Entrys: "",
              
              
                newAnswer:""
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
              King: this.state.newRoundTable.Journal.King.value,
              Warrior : this.state.newRoundTable.Journal.Warrior.value,
              Magician : this.state.newRoundTable.Journal.Magician.value,
              Lover : this.state.newRoundTable.Journal.Lover.value
              });
              
            await this.setDate(event);
            await this.setArray(event);
       
               
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
              
              Entrys : Object.assign(this.state.newRoundTable.submitDate, this.state.newRoundTable.Journal)
            })
            
        }





//         // Answers = () => { 
//         //     this.setState({
//         //     newAnswer: this.state.Entrys.map((number, index) => (<td> {number} </td>))
//         //     })
// }


        setDate = (data) => {
            this.setState({
            newRoundTable: newRoundTable.submitDate,
            newRoundTable:  newRoundTable.Journal
           
            })
        }
     





render () {

  
  let myItem = this.state.Entrys

  



  let displayItem = JSON.stringify(myItem)

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
                        King = { this.state.newRoundTable.Journal.King.value}
                        Warrior = {this.state.newRoundTable.Journal.Warrior.value}
                        Magician = {this.state.newRoundTable.Journal.Magician.value}
                        Lover = {this.state.newRoundTable.Journal.Lover.value}
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