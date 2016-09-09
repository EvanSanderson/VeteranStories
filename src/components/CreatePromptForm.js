import React, {Component} from 'react';

class CreatePromptForm extends Component {
  submitPrompt=(e) => {
    e.preventDefault();
    var promptText = this.refs.body.value;
    this.props.createPrompt(promptText);
    this.refs.body.value = "";
  }
  render(){
    return(
      <form onSubmit={(e)=> this.submitPrompt(e)}>
        <input
          placeholder="Enter a new prompt here"
          type="text"
          ref="body" />
          <button type="submit"> + Prompt </button>
        </form>
    )
  }
}

export default CreatePromptForm
