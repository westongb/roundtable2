import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Entrylist.css';

// import "./Entrylist.css";
import infoIcon from "../../Assets/PinClipart.com_autopsy-clipart_3334785.png"


export default function SimpleModal(props) {
   
  const [edit, setEdit] = useState(false)

  const [story, setStory] = useState(edit?props.Story: "")

  const [isLoaded, setIsLoaded] = useState(false)

  const [isStatement, setIsStatement] = useState(props.statement)

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

            
  // function rand() {
  //   return Math.round(Math.random() * 20) - 10;
  // }
  
  // function getModalStyle() {
  //   const top = 50 + rand();
  //   const left = 50 + rand();
  
  //   return {
  //     top: `${top}%`,
  //     left: `${left}%`,
  //     transform: `translate(-${top}%, -${left}%)`,
  //   };
  // }


 
  
  function getModalStyle() {
   
    return {
      top: `50px`,
      left: `50px`,
      transform: `translate(-10px, -10px)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: "90vw",
      height: '95%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 2, 2),
    },
  }));
  
  



    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
   
      setOpen(false);
      
    };


   
  const Toggleform = () => {

  return (  
    
    <div style={{height:"30px"}} >
      <button type="button" className="introbutton" style={{height:"30px",width: "30px" , margin:"20% 0 0 0%", borderRadius:"50px"}}  data-toggle="modal" onClick={handleOpen}>
      {/* <Octicon icon={IssueReopened}/> */}
      i
      </button><span className="infopop"><p>How does this Work?</p></span>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className="storyPop"
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">

{/* Add componet warcouncil */}
<div>
<div className="roundTableIntro">
    
  <h3 className="florenceChadwick">{props.introStory}</h3>
  <h2 className="storyStatement">{props.statement}</h2>
    <img src={props.pathImage}></img>
    <p className="storyDescription">{props.introDescription}
    </p>
</div>
</div>
            </p>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );  
}


return (
  <div>
    <Toggleform/>
  </div>
);
}