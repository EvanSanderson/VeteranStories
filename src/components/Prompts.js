import React, {Component} from 'react';
import Prompt from './Prompt';

class Prompts extends Component {
  constructor(){
    super()
    this.state ={
      prompt: []
    }
  }

  render(){
    return(
      <div>
      <Prompt
      key={this.props.prompt._id}
      prompt={this.props.prompt}
      deleteButton={this.deleteButton}
      deletePrompt={this.props.deletePrompt}/>

      </div>

    )
  }
}


export default Prompts
