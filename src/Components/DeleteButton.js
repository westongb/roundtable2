import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';

export default function DeleteButton (props) {

    const [entryId, setentryId] = useState(props.item)

    const [isLoaded, setIsLoaded] =useState(true)

    const deleteRecord = async (event, entryId) => { 
    
        await fetch(`http://localhost:5000/delete/${entryId}`, {
          method: 'Delete'
        })
        .then (console.log('has been deleted' + "" + entryId),
        )
  }

  const getData = () => {
    fetch("http://localhost:5000/get" , {
      method: "GET"
    })
.then(res=> res.json())
.then(res=> {
setIsLoaded(true)
},
(error) =>{
setIsLoaded(true)
});
  }





   return (
    <button onClick={(event) => deleteRecord(event,entryId)}><Octicon icon={Trashcan} /></button>
    )
}

