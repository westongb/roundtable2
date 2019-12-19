import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./warcouncil.css";
import InputField from "./FormInput";
import { async } from "q";

class warCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = {

 
    };
  }

  handleChange = (event, props) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onAnswerChange(event)
      }

    handleSubmit =  (event, props) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onAnswerSubmit(event)
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
                 
          

          <label>King</label>
          <textarea
            type="textarea"
            placeholder="kings input"
            value={this.props.King}
            onChange={this.handleChange}
            rows="4"
            name="King"
          />
          <label>Warrior</label>
          <textarea
            type="textarea"
            placeholder="Warrior input"
            value={this.props.Warrior}
            onChange={this.handleChange}
            rows="4"
            name="Warrior"
          />
          <label>Magician</label>
          <textarea
            type="textarea"
            placeholder="Magician input"
            value={this.props.Magician}
            onChange={this.handleChange}
            rows="4"
            name="Magician"
          />
          <label>Lover</label>
          <textarea
            type="textarea"
            placeholder="Lover input"
            value={this.props.Lover}
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
