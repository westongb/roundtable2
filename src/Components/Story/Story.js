import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputField from "../FormInput";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Story.css';
import {LoginContext} from '../Authentication/isAuthenticated'

export default function Story() {


  const {user, token} = useContext(LoginContext)

  const  [story, setStory] = useState("");
  const [savedStory, setSavedStory] = useState({hits: [] });
  const [isLoaded, setIsLoaded] = useState(true);



  function sendData () {
    fetch('http://localhost:5000/story', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
    },
    body: JSON.stringify({
          user: user,
          story: story
    } )})
    .then(
      res=> console.log("this Worked")
    )
  }


 
const submitHandler = event => {
  console.log(user)
sendData(user, story, token)
event.preventDefault()

}



useEffect(()=> {
})
  
    return (<div>
        <h1>This Is My Story</h1>
        <form className='storyform' noValidate autoComplete="off" onSubmit={submitHandler}>
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