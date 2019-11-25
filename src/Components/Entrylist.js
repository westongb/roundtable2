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
                isLoaded: false,
                error: null,
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
    
        componentDidMount = ()=> {
          fetch("http://localhost:5000/get")
    .then(res=> res.json())
    .then(res=> {
      this.setState({
          isLoaded: true,
          Entrys: res
          }
          );
          console.log(this.state.Entrys)
  },
  (error) =>{
    this.setState({
      isLoaded: true,
      error
    });
  });
  
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

  let textItem = Array.from(JSON.stringify(myItem));



  
 
    return (
        
        <div>
            <div className="JournalForm" >
           <h1>Round Table Entrys</h1>
           <p>{textItem}</p>
            <br></br>
            <li>
              <p>{this.state.setDatesetDate}</p>
            </li>
            <div>
                            
            </div>

            {/* <ul>
                <li>{this.state.KingEntry}<button >Edit</button></li>
                <li>{this.state.WarriorEntry}</li>
                <li>{this.state.MagicianEntry}</li>
                <li>{this.state.LoverEntry}</li>
            </ul> */}

            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">New Entry</button>
            </div>
        
        <div className="myModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                     <div className="modal-body">


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