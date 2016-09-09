import React, {Component} from 'react';
import Prompts from '../components/Prompts';
import PromptModel from '../models/Prompt';
import CreatePromptForm from '../components/CreatePromptForm';

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
  createPrompt = (promptText) => {
    var prompt = {body: promptText}
    var prompts = this.state.prompts
    prompts.push(prompt)
    this.setState({
      prompts: prompts
    })
    PromptModel.create(prompt)
  }

  render(){
    return(
      <div>
      <CreatePromptForm
      createPrompt = {this.createPrompt}/>
        <Prompts
        prompts={this.state.prompts} />
      </div>
    )
  }
}

export default PromptsContainer
