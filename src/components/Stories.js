import React, {Component} from 'react';
import Story from './Story';
import StoryModel from '../models/Story';

class Stories extends Component {
  constructor(){
    super()
    this.state={
      stories: []
    }
  }
  showStories=()=> {
    this.setState({
      stories: this.props.prompt.stories
    })
  }
  deleteStory = (story) => {
    console.log(story._id)
    var promptId = this.props.prompt._id
    var storyId = story._id
    StoryModel.delete(promptId, storyId).then((res)=>{
      console.log(res.data.stories)
      var stories = res.data.stories
      this.setState({
        stories: stories
      })
    })

  }

  render(){
    var stories=this.state.stories.map((story)=>{
      return (
        <Story
        key={story._id}
        story={story}
        prompt={this.props.prompt}
        deleteStory={this.deleteStory}
        />
      )
    })
    return (
        <div className="stories">
        <button onClick={this.showStories}> Show stories </button>
        {stories}
        </div>

    )
  }
}

export default Stories
