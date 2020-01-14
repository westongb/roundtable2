import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputField from "../FormInput";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Story.css';

export default function Story() {


  const  [story, setStory] = useState("");



  
    return (<div>
        <h1>This Is My Story</h1>
        <form className='storyform' noValidate autoComplete="off">
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
        <button>Submit</button>
        </form>
        <p></p>
    </div>

    )

}