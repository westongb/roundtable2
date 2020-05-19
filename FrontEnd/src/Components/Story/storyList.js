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


//Map Story onto Table
let storiesTable;
let storyItem;
let storyDate;
let storyId;




if(stories != "") {
storiesTable = stories.map((item,i) =>{
    storyId = item._id
    storyItem = item.story;
    storyDate = item.date;

    // storyDate = item.;
    return (
        <TableRow>
            <TableCell>{storyDate}</TableCell>
            <TableCell>{storyItem}</TableCell>
            <TableCell>{
            <button onClick={ ()=> deleteStory(storyId)} >Delete</button>
            }</TableCell>
            </TableRow>
    )
})} else{
 {
    return(
      <h1 className="loginBanner">You Must Log In to Write Your Story</h1>
    )
  }
}



return(
    <div>
    <TableContainer component={Paper}>
      <Table className="storytable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
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