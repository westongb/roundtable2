import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./warcouncil.css";


class warCouncil extends Component {
  constructor(props) {

    
    super(props);
    let edit = false;
    if (props.hasOwnProperty("King")){          

      edit=true
    }
    this.state = {
      King: edit?props.King: "",
      Warrior: edit?props.Warrior:"",
      Magician: edit?props.Magician: "",
      Lover: edit?props.Lover:"",
      Entrys: [],
      setDate:"",
      Journal:"",       
      newEntry:"",
      entryId: edit?props.entryId: "",
      update:edit?true: false,
      user: props.user,
      token: props.token
    };
  }

  
  sendData = (props) =>{
    fetch('http://localhost:5000/post', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        Authorization : this.state.token
    },
    body: JSON.stringify({
          user: this.state.user,
          Journal: this.state.Journal
    } )})
    .then(
      res=> console.log("this Worked")
    )
  }

//Post API
  updateData = () =>{
    const entryId = this.state.entryId
    fetch(`http://localhost:5000/update/${entryId}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
          Journal: this.state.Journal
    } )})
    .then(
      res=> console.log("this Worked")
    )
  }
 
  handleEntry = (props, edit) =>{
      if (this.state.update === true){
        this.updateData(this.state.entryId)
      } else {
        this.sendData()
      }
  }


  



//Clear form after Post
  clearAnswer =() => {
    this.setState({
      King: "",
      Warrior: "",
      Magician: "",
      Lover: "",
  
    })
  }

  
//Event Handlers
  handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setState({
      setDate: this.state.submitDate,
      Journal: [{King: this.state.King},{Warrior: this.state.Warrior},{Magician:this.state.Magician},{Lover: this.state.Lover}] ,
      })
  
      //Post
    await this.handleEntry(event);
    await this.clearAnswer(event);
    // await this.getData(event);
   
    }

  

     render() {
   
      console.log(this.state.user)
    return (
      <div className="warCouncil">
        <h1>War Council</h1>
        <form
          onSubmit={this.handleSubmit}
          className="warCouncilForm"
          id="warCouncilForm"
        >
                 

          <label>King</label>
          <textarea
            type="textarea"
            placeholder="kings input"
            value={this.state.King}
            onChange={this.handleChange}
            rows="4"
            name="King"
          />
          <label>Warrior</label>
          <textarea
            type="textarea"
            placeholder="Warrior input"
            value={this.state.Warrior}
            onChange={this.handleChange}
            rows="4"
            name="Warrior"
          />
          <label>Magician</label>
          <textarea
            type="textarea"
            placeholder="Magician input"
            value={this.state.Magician}
            onChange={this.handleChange}
            rows="4"
            name="Magician"
          />
          <label>Lover</label>
          <textarea
            type="textarea"
            placeholder="Lover input"
            value={this.state.Lover}
            onChange={this.handleChange}
            rows="4"
            name="Lover"
          />

          <br />
          <button type="submit" onSubmit={this.handleSubmit}>
           Submit
          </button>
        </form>
        </div>
    );
  }

  
}

export default warCouncil;
