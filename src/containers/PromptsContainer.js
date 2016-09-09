import React, {Component} from 'react';
import Prompts from '../components/Prompts';
import PromptModel from '../models/Prompt';

class PromptsContainer extends Component{
  constructor(){
    super()
    this.state = {
      prompts: []
    }
  }
  componentDidMount(){
    this.getPrompts()
  }
  getPrompts(){
    PromptModel.all().then((res) => {
      this.setState ({
        prompts: res.data
      })
    })
  }
  render(){
    return(
      <div>
        <Prompts
        prompts={this.state.prompts} />
      </div>
    )
  }
}

export default PromptsContainer
