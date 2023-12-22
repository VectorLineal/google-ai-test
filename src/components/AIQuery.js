import React from 'react';
import {processText} from "../middleware/GoogleGemini";

class AIQuery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', answer: 'hola'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value, answer: ''});
    }
    handleSubmit(event) {
      event.preventDefault();
      processText(this.state.value).then((text) =>{
        this.setState({value: this.state.value, answer: text});
      }, (error)=>{
        console.log("error:", error);
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Prompt:    
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <h1>{this.state.answer}</h1>
        </div>
        
      );
    }
  }

export default AIQuery;