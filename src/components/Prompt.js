import React, {Component} from 'react';
import Stories from './Stories';
import CreateStoryForm from './CreateStoryForm';
import PromptModel from '../models/Prompt';

class Prompt extends Component {
  constructor(){
    super()
    this.state = {
      prompt: []
    }
  }
  createStory = (storyText) => {
    console.log(this.props.prompt)
    var newStory = {body: storyText};
    console.log(newStory)
    var prompt = this.props.prompt
    prompt.stories.push(newStory);


  }
  render(){
    return(
      <div className="prompt">
        <p> {this.props.prompt.body} </p>
        <Stories
        prompt={this.props.prompt}
        stories={this.props.prompt.stories} />
        <CreateStoryForm
        createStory = {this.createStory} />
      </div>
    )
  }
}

export default Prompt;
