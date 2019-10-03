import React, { Component } from "react";
import { exportAllDeclaration } from "@babel/types";
import "./warcouncil.css";
import InputField from "./FormInput";
import { async } from "q";

class warCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // input fields from form


      // King: '',
      // Warrior: "",
      // Magician: "",
      // Lover: "",

      // Data Arrays

      // KingAnswer:[],
      // WarriorAnswer:[],
      // MagicianAnswer:[],
      // LoverAnswer:[],
      // eventstatus: false
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

//   handleSubmit = async (event, props) => {
//     event.preventDefault();
//     await this.setState(
//       { 
//       King: [this.state.King],
//       Warrior : [this.state.Warrior],
//       Magician : [this.state.Magician],
//       Lover : [this.state.Lover],
//       });
//       await this.setArray(event, props);
//     // this.props.onAnswerSubmit(event)
//     await this.setState({
//       King : "",
//       Warrior : "",
//       Magician : "",
//       Lover : "",
//     });
    
//   }
    
// onClick = async (event) => {
//   await this.setState({
//     [this.state.eventstatus]: true,
//   })
//   await this.setState({
//     [this.state.eventstatus]: false
//   })
//   await this.passAnswer()
// }


//   setArray = (props) => {
//     this.setState({
//       // KingAnswer: this.state.KingAnswer.push(this.state.King)
//       KingAnswer : [...this.props.KingAnswer, ...this.state.King],
//       WarriorAnswer: [...this.state.WarriorAnswer, ...this.state.Warrior],
//       MagicianAnswer: [...this.state.MagicianAnswer, ...this.state.Magician],
//       LoverAnswer: [...this.state.LoverAnswer, ...this.state.Lover]
//           }
//     )
//         }


     render() {
    return (
      <div className="warCouncil">
        <h1>War Council</h1>
        <form
          onSubmit={this.handleSubmit}
          className="warCouncilForm"
          id="warCouncilForm"
        >
                 
              {/* <InputField name="King" Archytype={this.state.King} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit} onClick={this.eventstatus}/>
            
              <InputField name="Warrior" Archytype={this.state.Warrior} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit} onClick={this.eventstatus}/>
              
              <InputField name="Magician" Archytype={this.state.Magician} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit} onClick={this.eventstatus}/>
            
              <InputField name="Lover" Archytype={this.state.Lover} onAnswerCharge={this.handleChange} placeholder="Type Here" onAnswerSubmit={this.handleSubmit} onClick={this.eventstatus}/> */}



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
