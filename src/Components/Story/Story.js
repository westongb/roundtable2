import React, { useContext, useState, useEffect } from "react";
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
    fetch('/story', {
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
  
    return (<div className='storyArea'>
        <h1 classname="storyhead" >This Is My Story</h1>
        <form className='storyform' noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          id="standard-multiline-flexible"
          className='storyField'
          label="Multiline"
          multiline
          rows="35"
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