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
    StoryModel.create(newStory, prompt).then(function(res){
      var story = res.data.stories[res.data.stories.length -1]
      console.log(story);
      var stories =this.props.prompt.stories;
      stories.push(story);
      this.setState({
        prompt: this.props.prompt,
        stories: stories
      })
    }.bind(this));


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
