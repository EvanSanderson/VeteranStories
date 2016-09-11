import React, {Component} from 'react';
import Stories from './Stories';
import CreateStoryForm from './CreateStoryForm';
import PromptModel from '../models/Prompt';
import StoryModel from '../models/Story';

class Prompt extends Component {
  constructor(){
    super()
    this.state = {
      prompt: [],
      stories: []
    }
  }
  // need to figure out what prompt.stories is and how to get that working
  createStory = (storyText) => {
    var newStory = {body: storyText};
    var prompt = this.props.prompt
    console.log(this.props.prompt)
    console.log(this.props.prompt.stories);
    prompt.stories.push(newStory);
    this.setState({
      prompt: this.props.prompt,
      stories: this.props.prompt.stories
    })
    StoryModel.create(newStory, prompt);


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
