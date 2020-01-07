import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';

export default function DeleteButton (props) {

    const [deleteEntry, setdeleteEntry] = useState(0);

    const [entryId, setentryId] = useState(props.item)
   
    const deleteRecord = (event, entryId) => { 
      // console.log("button works")
      // return deleteEntry;
      // function deleteEntry (entryId) {
        fetch(`http://localhost:5000/${entryId}/delete`, {
          method: 'Delete',
        })
        .then (console.log('has been deleted')
            
        )
    // }
  
  }
    return (
    <button onClick={deleteRecord}><Octicon icon={Trashcan}  /></button>
    )
}

