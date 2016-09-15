import React, {Component} from 'react';

class UpdatePromptForm extends Component {
  constructor(){
    super()
    this.state = {
      prompt: ""
    }
  }
  updateChange=(e)=> {
      this.setState({
        prompt: e.target.value
      })
  }
  onUpdatePrompt=(e)=> {
    e.preventDefault();
    var promptText = this.state.prompt
    this.props.updatePrompt(promptText);
    this.state.prompt = "";
    this.props.undoUpdate();

  }
  render(){
    return(
      <form className = "updateForm" onSubmit={(e) => this.onUpdatePrompt(e)} >
        <input
          onChange = {(e) => this.updateChange(e)}
          value={(this.state && this.state.prompt) || ''}
           />
          <button type="submit"> Update </button>
      </form>
    )
  }
}

export default UpdatePromptForm
