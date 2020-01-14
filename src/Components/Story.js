import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputField from "./FormInput";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Story() {

  
    return (<div>
        <h1>This Is My Story</h1>
        <form className='storyform' noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
        //   value={value}
        //   onChange={handleChange}
        />
        </form>
    </div>

    )

}