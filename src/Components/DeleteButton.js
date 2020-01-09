import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';

export default function DeleteButton (props) {

    const [entryId, setentryId] = useState(props.item)

    const deleteRecord = (event, entryId) => { 
    
        fetch(`http://localhost:5000/delete/${entryId}`, {
          method: 'Delete'
        })
        .then (console.log('has been deleted' + "" + entryId)
            
        )
  }
   return (
    <button onClick={(event) => deleteRecord(event,entryId)}><Octicon icon={Trashcan} /></button>
    )
}

