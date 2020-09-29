import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import {uriBase} from "../../consts";
import {LoginContext} from '../Authentication/isAuthenticated';
import "./Entrylist.css";

export default function DeleteButton (props) {


   
    const {user, token, loggedIn} = useContext(LoginContext)
    const [entryId, setentryId] = useState(props.item)

    const [isLoaded, setIsLoaded] =useState(true)

    const deleteRecord = async (event, entryId) => { 
    
        await fetch(`${uriBase}/delete/${entryId}`, {
          method: 'Delete',
          headers: {
            'Content-Type': 'application/json',
            Authorization : token
        },
        })
        .then (props.loadList()
        )
  }



   return (
    <button className="entryButton" onClick={(event) => deleteRecord(event,entryId)}><Octicon icon={Trashcan} /></button>
    )
}

