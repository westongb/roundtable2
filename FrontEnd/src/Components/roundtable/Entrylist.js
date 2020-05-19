import React, { useState, useEffect, useContext } from "react";
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
import {LoginContext} from '../Authentication/isAuthenticated'
import {uriBase} from "../../consts"

export default function Entrylist () {
  useEffect(() => {
        
    getData();
   //  getCurrentCourse();
},[]);

const {user, token, loggedIn} = useContext(LoginContext)

const [error, setError] = useState(null)
const [isLoaded, setIsLoaded] = useState(false)
const [King, setKing] = useState("")
const [Warrior, setWarrior] = useState("")
const [Magician, setMagician] = useState("")
const [Lover, setLover] = useState("")
const [setDate, setSetDate] = useState()
const [showPopup, setShowPopup] = useState(true)
const [Entrys, setEntrys] = useState([])
const [Journal, setJournal] = useState()
const [newEntry, setNewEntry] = useState()
const [Open, setOpen] = useState()

const togglePopup = () => {  
 setShowPopup(true)
} 


const delay = () => {
setTimeout(() => {
 return getData();
}, 1000);
}


function getData () {
fetch(`${uriBase}/roundtable/${user}` , {
 method: "GET",
 headers:{
   Authorization:"JWT"+" " + token
 }
})
.then(res=> res.json())
.then(res=> {
setIsLoaded(true)
setEntrys(res)
},
(error) =>{
setIsLoaded(true)
});
}


const handleOpen = () => {
setOpen(true)
};

if(loggedIn === true){
return (
<div>
<div className="JournalForm" >
<h1>Round Table Entrys</h1>
<button><Octicon icon={IssueReopened} onclick={delay}/></button>
<br></br>
 <Table>
   <thead>
     <tr>
       <td>Date</td>
       <td>Journal</td>
     </tr>
   </thead>
       <tbody >
         
         <EntryTable loadList={getData}Entrys={Entrys} showPopup={delay} />
         
       </tbody>
 </Table>
<br></br>
<div>       
</div>
{/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" onClick={this.togglePopup.bind(this)}>New Entry</button> */}
   </div>
   {showPopup ?  
 <Popup className="popup"

                loadList = {getData} 
                 item = ""
                 entryId = ""
                 King = {King}
                 Warrior = {Warrior}
                 Magician = {Magician}
                 Lover = {Lover}
                //  onAnswerChange = {handleChange}   
                //  onAnswerSubmit = {handleSubmit}
                 />

 
: null  
}
</div>

);}else{
return(
  <h1 className="loginBanner">You Must Log In to Meet With Your Party</h1>
)

}}
