import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {LoginContext} from '../Authentication/isAuthenticated';
import "./warcouncil.css";
import {uriBase} from "../../consts"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '100%',
    margin: "10%"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '80%',
  },

}));


export default function RetrospectiveModal(props) {

    let edit = false;
    if (props.hasOwnProperty("Retro")){          

      edit=true
    }

  const classes = useStyles();
  const [open, setOpen] = React.useState(props.Open);
  const [retro, setRetro] = useState(edit?props.Retro:"")
  
//   const {retroId, retroText} = props.Retro
  
  let Archytype = props.Archytype

  const retroName = Archytype + "retro"

  const retroFormat = {retroName: retro}

  const {user, setUser, loggedIn, setLoggedIn, token, writeToken} = useContext(LoginContext);

  console.log(props.Retro)

  const postRetro = () =>{
    const entryId = props.entryId
    fetch(`${uriBase}/update/${entryId}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
        Authorization : token
    },
    body: JSON.stringify({

          Retrospective: retro
    } )})
    .then(
      res=> console.log("this Worked")
    )
    }

const addRetro = (e) => {
    e.preventDefault();
    postRetro()
}

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <input type="checkbox" className="retroCheckBox" onChange={handleOpen}></input>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
      <form onSubmit={addRetro}>
          <label>Retrospective</label>
          <input type="textbox" value={retro} onChange={(e)=> setRetro(e.target.value)} ></input>
          <button type="submit">Submit</button>
      </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}