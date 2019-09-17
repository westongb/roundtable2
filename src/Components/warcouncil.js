import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./warcouncil.css";
import InputField from "./FormInput";

class warCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      King: '',
      Warrior: "",
      Magician: "",
      Lover: "",
      KingAnswer:[],
      WarriorAnswer:[],
      MagicianAnswer:[],
      LoverAnswer:[],
    };
    this.initilState ={
      King: "",
      Warrior: "",
      Magician: "",
      Lover: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    
  }


  handleSubmit = async (event, props) => {
    event.preventDefault();
    await this.setState(
      { 
      King : [this.state.King],
      Warrior : [this.state.Warrior],
      Magician : [this.state.Magician],
      Lover : [this.state.Lover],
      });
      await this.setArray(event);
    // this.props.onAnswerSubmit(event)
      await this.setState({
        King: "",
        Warrior: "",
        Magician: "",
        Lover: ""
      })
  }

  setArray = () => {
    this.setState({
      // KingAnswer: this.state.KingAnswer.push(this.state.King)
      KingAnswer: [...this.state.KingAnswer, ...this.state.King],
      WarriorAnswer: [...this.state.WarriorAnswer, ...this.state.Warrior],
      MagicianAnswer: [...this.state.MagicianAnswer, ...this.state.Magician],
      LoverAnswer: [...this.state.LoverAnswer, ...this.state.Lover]
          }
    )
  }

     render() {
    return (
      <div className="warCouncil">
        <h1>War Council</h1>
        <form
          onSubmit={this.handleSubmit}
          className="warCouncilForm"
          id="warCouncilForm"
        >
                 
          <InputField name="King" Archytype={this.state.King} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit}/>
        
          <InputField name="Warrior" Archytype={this.state.Warrior} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit}/>
          
          <InputField name="Magician" Archytype={this.state.Magician} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit}/>
         
          <InputField name="Lover" Archytype={this.state.Lover} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit}/>
                   
          <br />
          <button type="submit" onClick={this.handleSubmit}>
           Submit
          </button>
        </form>
        </div>
    );
  }
}

export default warCouncil;
