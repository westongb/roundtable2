import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import Popup from './Popup';

export default function UpdateButton (props) {

    const [deleteEntry, setdeleteEntry] = useState(0);

    const [entryId, setentryId] = useState(props.item);

    const [showPopup, setshowPopup] = useState(false);

    const handleOpen = () => {
        setshowPopup(true);
      };

     console.log(props.item)


    const updateEntrly = () => {
        
    }
    
    const deleteRecord = (event, entryId) => { 
      // console.log("button works")
      // return deleteEntry;
      // function deleteEntry (entryId) {
        fetch(`http://localhost:5000/${entryId}/delete`, {
          method: 'Delete',
        })
        .then (console.log('has been deleted'))
    // }
  
  }
    return (
        <div>
        <button onClick={handleOpen}><Octicon icon={IssueReopened}/></button>
 
   
        {showPopup ?  
      <Popup className="popup"
  
                      
                    //   King = { this.state.King}
                    //   Warrior = {this.state.Warrior}
                    //   Magician = {this.state.Magician}
                    //   Lover = {this.state.Lover}
                    //   onAnswerChange = {this.handleChange}
                    //   onAnswerSubmit = {this.handleSubmit}
                      />

      
    : null  
    }
      
    </div>  
    )
}

