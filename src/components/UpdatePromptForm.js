import React, {Component} from 'react';

class UpdatePromptForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: this.props.prompt.body
    }
  }
  updateChange=(e)=> {
      this.setState({
        body: e.target.value
      })
      console.log(this.state.body)
  }
  onUpdatePrompt=(e)=> {
    e.preventDefault();
    var promptText = this.state.body
    this.props.updatePrompt(promptText);
    console.log(this.props.prompt.body)
    this.props.undoUpdate();

  }
  render(){
    return(
      <form className="updatePromptForm" onSubmit={(e) => this.onUpdatePrompt(e)} >
        <input
          type="text"
          onChange={(e) => this.updateChange(e)}
          value={(this.state && this.state.body) || ""}
           />
          <button className="button" type="submit"> Update </button>
      </form>
    )
  }
}

export default UpdatePromptForm
