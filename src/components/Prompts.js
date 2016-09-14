import React, {Component} from 'react';
import Prompt from './Prompt';

class Prompts extends Component {
  constructor(){
    super()
    this.state ={
      prompt: []
    }
  }
  showPrompt = () => {
    var prompts=this.props.prompts
    var prompt=prompts[Math.floor(Math.random()*prompts.length)];
    this.setState({
      prompt: prompt
    })
  }

  render(){
    return(
      <div className="prompts">
      <button className= "button" onClick={this.showPrompt}> Get A Prompt </button>
      <Prompt
      key={this.state.prompt._id}
      prompt={this.state.prompt}
      deleteButton={this.deleteButton}
      deletePrompt={this.props.deletePrompt}/>

      </div>

    )
  }
}


export default Prompts
