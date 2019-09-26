import React, { Component } from "react";
import { async } from "q";

class InputForm extends Component{
    constructor (props){
        super(props);
        this.state ={
            name: "",
      
        }
        this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(event,props) {
        this.props.onAnswerCharge(event)
        event.preventDefault();
      }


    render() {
        return (
          <div>
            <form
              onSubmit={this.handleSubmit}
              onClick={this.resetForm}
              className="warCouncilForm"
              id="warCouncilForm"
            >
              <label>{this.props.name}</label>
              <textarea
                type="textarea"
                placeholder={this.props.placeholder}
                value={this.state.Archytype}
                onChange={this.handleChange}
                rows="4"
                name={this.props.name}
              />
             </form>
            </div>
        );
      }
    }

export default InputForm;