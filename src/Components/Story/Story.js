import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputField from "../FormInput";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Story.css';

export default function Story() {


  const  [story, setStory] = useState("");
  const [savedStory, setSavedStory] = useState({hits: [] });
  const [isLoaded, setIsLoaded] = useState(true);



  function sendData () {
    fetch('http://localhost:5000/story', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
          story: story
    } )})
    .then(
      res=> console.log("this Worked")
    )
  }


 




useEffect(()=> {
})
  
    return (<div>
        <h1>This Is My Story</h1>
        <form className='storyform' noValidate autoComplete="off" onSubmit={sendData}>
        <TextField
          id="standard-multiline-flexible"
          className='storyField'
          label="Multiline"
          multiline
          rowsMax="40"
          value={story}
          onChange={e => setStory(e.target.value)}
        />
        <br></br>
        <button type="submit">Submit</button>
        </form>
        <p></p>
    </div>

    )

}