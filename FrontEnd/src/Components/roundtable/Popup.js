import React, { useState, useEffect, useContext } from 'react';
import WarCouncil from "./warcouncil";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./Entrylist.css";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import {LoginContext} from '../Authentication/isAuthenticated';

export default function SimpleModal(props) {

   
  const [edit, setEdit] = useState(false)

  const [King, setKing] = useState(edit?props.King: "")

  const [isLoaded, setIsLoaded] = useState(false)

  const {user, token, isLoggedIn} = useContext(LoginContext)

  // Component Life Cycle
 
  const [entryId, setentryId] = useState(props.entryId)
  //Event Handlers

  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.onAnswerChange(event);
  }

   const handleSubmit = async (event) => {
    event.preventDefault();
    props.onAnswerSubmit(event);
    handleClose(event);
    }

            
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 20 + rand();
    const left = 25 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  



    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (e) => {
      e.preventDefault()
      props.loadList()
      setOpen(false);
      
    };

 

  const checkUpdate = () => {
    if (props.King!=="") {          
  
      handleOpen(true);
    }
  }


  const Toggleform = () => {
  if (entryId === "")
   {
  return (  
    <div>
      <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={handleOpen}>
        New Entry
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">

{/* Add componet warcouncil */}
              <WarCouncil closeForm={handleClose} user={user} token={token}  />
            </p>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );  
} else {
  return (  
    
    <div>
      <button type="button"  data-toggle="modal" onClick={handleOpen}>
      <Octicon icon={IssueReopened}/>
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">

{/* Add componet warcouncil */}
<WarCouncil
                      closeForm={handleClose}
                      entryId = {props.entryId}
                      King = { props.King}
                      Warrior = {props.Warrior}
                      Magician = {props.Magician}
                      Lover = {props.Lover}
                      user={user}
                       token={token} 
                
                    />
            </p>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );  
}
}

return (
  <div>
    <Toggleform/>
  </div>
);
}