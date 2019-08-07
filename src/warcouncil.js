import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./warcouncil.css";

class warCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      King: "",
      Warrior: this.props.warriorAnswer,
      Magician: "",
      Lover: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  }
  handleSubmit(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.props.warriorAnswer);
    event.preventDefault();
  }

  warriorWritten = props => {};

  render() {
    return (
      <div className="warCouncil">
        <h1>War Council</h1>
        <form
          onSubmit={this.handleSubmit}
          onClick={this.resetForm}
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
          <button type="submit" onClick={this.resetForm}>
            Submit
          </button>
        </form>

        <h1>Notes on the Meeting</h1>
        <br />
        <h2>Kings Council</h2>
        <p>{this.state.King}</p>
        <h2>Warriors Council</h2>
        <p>{this.state.Warrior}</p>
        <h2>Magicians Council</h2>
        <p>{this.state.Magician}</p>
        <h2>Lovers Council</h2>
        <p>{this.state.Lover}</p>
      </div>
    );
  }
}

export default warCouncil;
