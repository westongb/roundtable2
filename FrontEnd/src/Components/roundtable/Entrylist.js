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
import {uriBase} from "../../consts";
import StoryIntro from "../roundtable/architypeIntroPop";
import pathImage from "../../Assets/Architype.jpg";

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

let statement = "“In the absence of The King the Warrior becomes a mercenary, the Magician becomes a sophist (able to argue any position and believing in none), and the Lover becomes an addict.”";
let introStory = 'In 1990 Robert Moore published his book "King Warrior Magician Lover: Rediscovering the Archetypes of the Mature Masculine". He details the power of connecting the the 4 cardinal male archetypes. This tool is designed to help you to develope your own internal connection to the King Warrior Magician and Lover.'
let introDescript = "The more clearly you can see the completion of your goal the more likely you are to acheive it. So this tool is designed for you to write out what that looks like. Describe a day in your life after you have acheived your goal. How does acheiving that goal make you feel, look, how do others react to you? What other areas of your life are effected. What habbits will you need to do on a daily basis inorder to maintain it? The more clearly you can paint the picure of your life improving after completing your goals, the stronger your motivation will be to acheive them. <br/>   Then once you have written your story, read it every night before you go to bed. This will help convince your subconscience mind that your goal is worth acheiving, and your motivation will skyrocket. "

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
<h1></h1>
<div>
    <div className="storyIntro">
     <h1>Round Table Entrys</h1>
      <q className="storyQuote">"Knowing yourself is the beginning of wisdon." Aristotle</q>
      </div>
      <StoryIntro statement={statement} introStory={introStory} introDescription={introDescript} pathImage={pathImage}/>
      </div>
{/* <button><Octicon icon={IssueReopened} onclick={delay}/></button> */}
<br></br>
 <Table>
   <thead>
     <tr>
       <th>Date</th>
       
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
  <div>
 
    <div className="roundTableIntro">
    <h1>Round Table Entrys</h1>
      <q className="storyQuote">"Knowing yourself is the beginning of wisdon." Aristotle</q>
      <StoryIntro statement={statement} introStory={introStory} introDescription={introDescript} pathImage={pathImage}/>
      </div>
    <h1 className="loginBanner">You Must Log In to Meet With Your Party</h1>
    </div>
)

}}
