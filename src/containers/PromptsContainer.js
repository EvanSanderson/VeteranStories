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
      console.log(res.data)
      this.setState ({
        prompts: res.data,
      })
    })
  }
  createPrompt = (promptText) => {
    var prompt = {body: promptText}
    PromptModel.create(prompt).then(function(res){
      var prompts = this.state.prompts;
      prompts.push(res.data);
      console.log("before promps");
      console.log(prompts);
      this.setState({
        prompts: prompts
      })
    }.bind(this))
    console.log(this.state.prompts)
    // prompts.push(prompt)
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
