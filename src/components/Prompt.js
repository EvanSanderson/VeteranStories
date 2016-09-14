import React, {Component} from 'react';
import Stories from './Stories';
import CreateStoryForm from './CreateStoryForm';
import StoryModel from '../models/Story';
import UpdatePromptForm from './UpdatePromptForm';
import PromptModel from '../models/Prompt';

class Prompt extends Component {
  constructor(){
    super()
    this.state = {
      prompt: [],
      stories: []
    }
  }
  componentDidMount(){
    this.getPrompt();
  }
  getPrompt(){
    this.setState({
      prompt: this.props.prompt
    })
  }
  // need to figure out what prompt.stories is and how to get that working
  createStory = (storyText) => {
    var newStory = {body: storyText};
    var prompt = this.props.prompt
    StoryModel.create(newStory, prompt).then(function(res){
      var story = res.data.stories[res.data.stories.length -1]
      var stories =this.props.prompt.stories;
      stories.push(story);
      this.setState({
        prompt: this.state.prompt,
        stories: stories
      })
    }.bind(this));


  }
  updatePrompt = (promptText) => {
      console.log("hello from Prompt container")
      console.log(promptText);
      console.log(this.props.prompt._id);
      var promptId = this.props.prompt._id;
      PromptModel.update(promptId, promptText).then((res) => {
        this.setState({
          prompt: res.data
        })
      })
  }
  showDeleteButton = () => {
    if (this.state.prompt.body) {
      return "(delete)"
    }
  }
  render(){
    return(
      <div className="prompt">
        <p> {this.state.prompt.body} </p>
        <div className="deleteButton" onClick={() => this.props.deletePrompt(this.state.prompt)}>
          {this.showDeleteButton()}
        </div>
        <UpdatePromptForm
        prompt = {this.props.prompt}
        updatePrompt = {this.updatePrompt}/>
        <div className ="createStoryForm">
        <CreateStoryForm
        createStory = {this.createStory} />
        </div>
        <Stories
        prompt={this.props.prompt}
        stories={this.props.prompt.stories} />
      </div>
    )
  }
}

export default Prompt;
