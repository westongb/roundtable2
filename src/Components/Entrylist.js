import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WarCouncil from "./warcouncil";
import "./Entrylist.css";
import { createConfigItem } from "@babel/core";
import Moment from 'react-moment';
import EntryItem from './entry';
import Table from "react-bootstrap/Table";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import Modal from 'react-bootstrap/Button';
import Popup from './Popup';
import DeleteButton from './DeleteButton';

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

              submitDate: "",
              
              showPopup: true,
        // Stored Arrays
              Entrys: [],
                setDate:"",
                Journal:"",       
              newEntry:"",
        }
      } 
  
  // Component Life Cycle
  componentDidMount = () => {
  this.getData()
  }

  //Event Handlers

  handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setState({
      setDate: this.state.submitDate,
      Journal: [{King: this.state.King},{Warrior: this.state.Warrior},{Magician:this.state.Magician},{Lover: this.state.Lover}] ,
      })
  
    await this.sendData(event);
    await this.delay(event);
    await this.clearAnswer(event);
    // await this.getData(event);
   
    }

    deleteUrl = () => {
        return 'http://localhost:5000/${entryId}/delete'
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

    sendData = () =>{
      fetch('http://localhost:5000/post', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            Journal: this.state.Journal
      } )})
      .then(
        res=> console.log("this Worked")
      )
    }
  
    deleteEntry = () => {
      fetch(this.deleteUrl, {
        method: 'Delete',
      })
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

clearAnswer =() => {
  this.setState({
    King: "",
    Warrior: "",
    Magician: "",
    Lover: "",

  })
}

onClick =(event) => {
  this.getData(event);
}

render(){

let myItem = this.state.Entrys;

let testItems = JSON.stringify(myItem);

let enrtyId;
let entrySetDate;
let entryJournal;
let displayItem;
let entryKing;
let listKing;
let entryWarrior;
let listWarrior;
let entryMagician;
let listMagician;
let entryLover;
let listLover;
let journalTable;
let tableItems;

var i;
for (i = 0; i< myItem.length; i++) {
  let itemList = myItem[i];

   tableItems = myItem.map( function (item, i){
    var entryId = item.id;
    var setDate = item.setDate;
    var King = item.Journal[0].King;
    var Warrior = item.Journal[1].Warrior;
    var Magician = item.Journal[2].Magician;
    var Lover = item.Journal[3].Lover;
    
    
    
   return <tr>
          <td>{setDate}</td>
          <td>
              <span id="tableTitle">King:</span> {King} <span> </span>
              <span id="tableTitle">Warrior:</span>{Warrior} <span> </span> 
              <span id="tableTitle">Magician:</span>{Magician} <span> </span>
              <span id="tableTitle">Lover:</span>{Lover}<span> </span>
        </td>
        <td id="update-delete">
          <div>
          <DeleteButton onClick=''/>
          <span>  </span>
          <button><Octicon icon={IssueReopened}/></button>
          </div>
        </td>
         </tr>
  });

}


return (
    <div>
    <div className="JournalForm" >
   <h1>Round Table Entrys</h1>
   <button><Octicon icon={IssueReopened} onclick={this.delay}/></button>
   <br></br>
   <Table>
     <tr>
       <td>Date</td>
       <td>Journal</td>
       <td></td>
     </tr>
      {tableItems}
   </Table>
    <br></br>
    <div>  
                     
    </div>
    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" onClick={this.togglePopup.bind(this)}>New Entry</button> */}
        </div>
        {this.state.showPopup ?  
      <Popup className="popup"
  
                      
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