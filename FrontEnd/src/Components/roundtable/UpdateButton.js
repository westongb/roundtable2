import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import Popup from './Popup';
import "./updateButton.css";

export default function UpdateButton (props) {

    const [deleteEntry, setdeleteEntry] = useState(0);

    const [entryId, setentryId] = useState(props.entryId);

    const [showPopup, setshowPopup] = useState(false);

    const [King, setKing] = useState(props.King)

    const handleOpen = () => {
        setshowPopup(true);
      };

     


    const updateEntrly = () => {
        
    }
    
  
    return (
        <div>
        <button  onClick={handleOpen}><Octicon icon={IssueReopened}/></button>
 
   
        {showPopup ?  
      <Popup className="popup" 
  
                    entryId = {entryId} 
                    King = {King}
                    Warrior = {props.Warrior}
                    Magician = {props.Magician}
                    Lover = {props.Lover}
                    //   onAnswerChange = {this.handleChange}
                    //   onAnswerSubmit = {this.handleSubmit}
                      />

      
    : null  
    }
      
    </div>  
    )
}

