import React, {Component} from 'react';
import Prompts from '../components/Prompts';
import PromptModel from '../models/Prompt';
import CreatePromptForm from '../components/CreatePromptForm';

class PromptsContainer extends Component{
  constructor(){
    super()
    this.state = {
      prompts: [],
      stories: []
    }
  }
  componentDidMount(){
    this.getPrompts()
  }
  getPrompts(){
    PromptModel.all().then((res) => {
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
  deletePrompt = (prompt) => {
    console.log(prompt)
    console.log("Hello from container!")
    var promptId = prompt._id
    PromptModel.delete(promptId).then((res)=>{
      var prompts = this.state.prompts
      var promptsMinusDeleted = prompts.filter((eachPrompt)=>!(eachPrompt._id === prompt._id))
      this.setState({
        prompts: promptsMinusDeleted
      })
    })
  }

  render(){
    return(
      <div>
        <Prompts
        prompts={this.state.prompts}
        deletePrompt={this.deletePrompt} />
        <CreatePromptForm
        createPrompt = {this.createPrompt}/>
      </div>
    )
  }
}

export default PromptsContainer
