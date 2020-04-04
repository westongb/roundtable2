import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WarCouncil from "./warcouncil";
import "./Entrylist.css";
import { createConfigItem } from "@babel/core";
import Moment from 'react-moment';
import EntryItem from '../entry';
import Table from "react-bootstrap/Table";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import Modal from 'react-bootstrap/Button';
import Popup from './Popup';
import DeleteButton from './DeleteButton';
import EntryTable from './Table';


class Entrylist extends Component {
  constructor(props) {



  super (props);
      this.state = { 

          // Input Data
              error: null,
              isLoaded: false,
              King: "",
              Warrior: "",
              Magician: "",
              Lover:"",
              // arrayIndex: entryId,
              submitDate: "",
              
              showPopup: true,
        // Stored Arrays
              Entrys: [],
                setDate:"",
                Journal:"",       
              newEntry:"",
              Open: "",
              user: this.props.location.props,
             
        }
      } 
  
 
  componentDidMount = () => {
  this.getData()
  }


  

    delay = () => {
    setTimeout(() => {
      return this.getData();
    }, 1000);
  }

  

    togglePopup = () => {  
      this.setState({  
           showPopup: !this.state.showPopup  
      });  
    } 


  deconstructUser = () => {
    const userName = this.state.user.userName
   
  }
  



getData = () => {
    fetch("http://localhost:5000/get" , {
      method: "GET"
    })
.then(res=> res.json())
.then(res=> {
this.setState({
  
    isLoaded: true,
    Entrys: res
    });
},
(error) =>{
this.setState({
isLoaded: true,
error
});
});
  }



handleOpen = () => {
  this.setState({
    Open: true});
};

onClick =(event) => {
  this.getData(event);
}


render(){
  

return (
    <div>
    <div className="JournalForm" >
   <h1>Round Table Entrys</h1>
   <button><Octicon icon={IssueReopened} onclick={this.delay}/></button>
   <br></br>
      <Table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Journal</td>
          </tr>
        </thead>
            <tbody >
              
              <EntryTable Entrys={this.state.Entrys} showPopup={this.state.delay} />
              
            </tbody>
      </Table>
    <br></br>
    <div>       
    </div>
    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" onClick={this.togglePopup.bind(this)}>New Entry</button> */}
        </div>
        {this.state.showPopup ?  
      <Popup className="popup"
  
                      item = ""
                      entryId = ""
                      King = { this.state.King}
                      Warrior = {this.state.Warrior}
                      Magician = {this.state.Magician}
                      Lover = {this.state.Lover}
                      onAnswerChange = {this.handleChange}   
                      onAnswerSubmit = {this.handleSubmit}/>

      
    : null  
    }
    <div>
    </div>  
    </div>

);}
}

export default Entrylist;