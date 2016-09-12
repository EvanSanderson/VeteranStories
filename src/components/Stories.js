import React, {Component} from 'react';
import Story from './Story';

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
  render(){
    var stories=this.state.stories.map((story)=>{
      return (
        <Story
        key={story._id}
        story={story} />
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
