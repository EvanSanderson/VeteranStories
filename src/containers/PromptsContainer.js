import React, {Component} from 'react';
import Prompts from '../components/Prompts';
import PromptModel from '../models/Prompt';
import CreatePromptForm from '../components/CreatePromptForm';

class PromptsContainer extends Component{
  constructor(){
    super()
    this.state = {
      prompts: [],
      stories: [],
      prompt: []
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
      console.log(res.data)
      var prompts = this.state.prompts
      var promptsMinusDeleted = prompts.filter((eachPrompt)=>!(eachPrompt._id === prompt._id))
      this.getPrompts();
      this.showPrompt();
    })
  }
  showPrompt = () => {
    var prompts=this.state.prompts
    console.log(prompts)
    var prompt=prompts[Math.floor(Math.random()*prompts.length)];
    this.setState({
      prompt: prompt
    })
  }

  render(){
    return(
      <div>
      <div className="getPromptButton" onClick={this.showPrompt}> Get A Prompt </div>
        <CreatePromptForm
        createPrompt={this.createPrompt}/>
        <Prompts
        showPrompt = {this.showPrompt}
        prompts={this.state.prompts}
        prompt={this.state.prompt}
        deletePrompt={this.deletePrompt} />
      </div>
    )
  }
}

export default PromptsContainer
