import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StoryPopup from "./Storypopup";
import './Story.css';
import {LoginContext} from '../Authentication/isAuthenticated';
import {uriBase} from '../../consts';
import ViewStory from "./viewStory";
import StoryIntro from "./storyIntropop";
import pathImage from "../../Assets/pngguru.png";


export default function StoryList () {
    useEffect(() => {
        getStory();
    },[]);

const {user, token, loggedIn} = useContext(LoginContext)

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [stories, setStories] = useState("")
  const [showPopup, setShowPopup] = useState(true)
  const [open, setOpen] = useState(false)

  let statement = "You cannot acheive a goal without vision";
  let introStory = "In 1952 Florence Chadwick attempted to swim the 20 miles from the coast of California to Catalina Island. After 15 hours of swimming   a think fog rolled in preventing her from seeing her goal, and that lack of vision eventually caused her to give up only one mile from the shore."
  let introDescript = "The more clearly you can see the completion of your goal the more likely you are to acheive it. So this tool is designed for you to write out what that looks like. Describe a day in your life after you have acheived your goal. How does acheiving that goal make you feel, look, how do others react to you? What other areas of your life are effected. What habbits will you need to do on a daily basis inorder to maintain it? The more clearly you can paint the picure of your life improving after completing your goals, the stronger your motivation will be to acheive them. <br/>   Then once you have written your story, read it every night before you go to bed. This will help convince your subconscience mind that your goal is worth acheiving, and your motivation will skyrocket. "


    function getStory  () {
        fetch(`${uriBase}/story/${user}`, {
          method: "GET",
          headers:{
            Authorization:"JWT"+" " + token
          }
        })
    .then(res=> res.json())
    .then(res=> 
    {setStories(res)
    },
    (error) =>{
    console.log(error);
    });
    }

    function deleteStory () {
        fetch(`${uriBase}/story/delete/${storyId}`, {
            method: "Delete",
            headers:{
              Authorization:"JWT"+" " + token
            }
          }).then (console.log('has been deleted'),
          ).then( () => {
    getStory();
  })
    }

  const  togglePopup = () => {  
        setShowPopup(false)
      } 


const handleOpen = () => {
        setOpen(true);
      };

//Map Story onto Table
let storiesTable;
let storyItem;
let storyDate;
let storyId;


const openViewStory = () => {


}

if(user != "") {
  if(stories != ""){
storiesTable = stories.map((item,i) =>{
    storyId = item._id
    storyItem = item.story;
    storyDate = item.date;

    // storyDate = item.;
    return (
    
 
        <TableRow className="storyData" onClick={handleOpen}>
            <TableCell  className="storyDate">{storyDate}</TableCell>
            <TableCell  className="storyText" > <ViewStory id="storyText"  story={storyItem} Open={open}/></TableCell>
            <TableCell>{
            <button className="deleteButton" onClick={ ()=> deleteStory(storyId)} >Delete</button>
            }</TableCell>
            
            </TableRow>
          
    )
})}else {
  
return(
  <div>
   <div>
    <div className="storyIntro">
      <h1>Write Your Own Story</h1>
      <q className="storyQuote">A journey of a thousand miles begins with a single step.</q>
      </div>
      <StoryIntro statement={statement} introStory={introStory} introDescription={introDescript} pathImage={pathImage}/>
      </div>
  <TableContainer className="storyContainer" component={Paper}>
    <Table className="storytable" aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="storyDate">Date</TableCell>
          <TableCell>Story</TableCell>
          <TableCell ></TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
          
       </TableBody>
    </Table>
  </TableContainer>

     
    <StoryPopup loadList = {getStory} className="popup"/>

  </div>
);
}} else{
 {
    return(
      <div>
         <div className="storyIntroTitle">
    <div  >
      <h1>Write Your Own Story</h1>
      <q className="storyQuote">A journey of a thousand miles begins with a single step.</q>
      </div>
      <StoryIntro statement={statement} introStory={introStory} introDescription={introDescript} pathImage={pathImage}/>
      </div>
      <h1 className="loginBanner">You Must Log In to Write Your Story</h1>
      </div>
    )
  }
}



return(
    <div>
     <div className="storyIntroTitle">
    <div  >
      <h1>Write Your Own Story</h1>
      <q className="storyQuote">A journey of a thousand miles begins with a single step.</q>
      </div>
      <StoryIntro statement={statement} introStory={introStory} introDescription={introDescript} pathImage={pathImage}/>
      </div>
    <TableContainer component={Paper}>
      <Table className="storytable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="storyDate">Date</TableCell>
            <TableCell>Story</TableCell>
            <TableCell ></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {storiesTable}
         </TableBody>
      </Table>
    </TableContainer>
 
       
      <StoryPopup loadList = {getStory} className="popup"/>
  
    </div>
);
}