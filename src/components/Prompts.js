import React, {Component} from 'react';
import Prompt from './Prompt';

class Prompts extends Component {
  render(){
    var prompts= this.props.prompts.map((prompt)=>{
      return (
        <Prompt
          key={prompt._id}
          prompt={prompt} />
      )
    })
    return(
      <div className= "prompts">
      <h1> I am the prompts component! </h1>
      <button onClick={this.showPrompt}>
        {prompts}
      </div>
    )
  }
}

export default Prompts
