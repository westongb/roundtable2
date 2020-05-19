import React, { useState, useEffect } from 'react';
import Story from "./Story";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Story.css';
// import "./Entrylist.css";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';

export default function SimpleModal(props) {
   
  const [edit, setEdit] = useState(false)

  const [story, setStory] = useState(edit?props.Story: "")

  const [isLoaded, setIsLoaded] = useState(false)

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
      width: "90%",
      height: '90%',
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
      props.loadList();
      setOpen(false);
      
    };

 

  const checkUpdate = () => {
    if (props.Story!=="") {          
  
      handleOpen(true);
    }
  }

   
  const Toggleform = () => {
  if (entryId === "")
   {
  return (  
    <div  >
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
          <p id="simple-modal-description" className="storyBody">

{/* Add componet warcouncil */}
              <Story closeForm = {handleClose}/>
            </p>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );  
} else {
  return (  
    
    <div >
      <button type="button" className="btn btn-primary btn-lg"  data-toggle="modal" onClick={handleOpen}>
      {/* <Octicon icon={IssueReopened}/> */}
      New Story
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
<Story
   closeForm = {handleClose}                   
                
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