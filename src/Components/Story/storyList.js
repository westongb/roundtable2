import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StoryPopup from "./Storypopup";




const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

export default function StoryList () {
    useEffect(() => {
        getStory();
    },[]);

    const [stories, setStories] = useState("")
    const [showPopup, setShowPopup] = useState(true)

    function getStory  () {
        fetch('http://localhost:5000/story/get', {
          method: "GET"
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
        fetch(`http://localhost:5000/story/delete/${storyId}`, {
            method: "Delete"
          }).then (console.log('has been deleted' + " " + storyId),
          ).then(useEffect)
    }

  const  togglePopup = () => {  
        setShowPopup(false)
      } 


let storiesTable;
let storyItem;
let storyDate;
let storyId;

if(stories != "") {
storiesTable = stories.map((item,i) =>{
    storyId = item._id
    storyItem = item.story;
    storyDate = item.date;
    console.log(storyId)
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
})}

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
 
       
      <StoryPopup className="popup"/>
  
    </div>
);
}