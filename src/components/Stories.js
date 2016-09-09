import React, {Component} from 'react';
import Story from './Story';

class Stories extends Component {
  render(){
    console.log(this.props.prompt);
      var stories = this.props.prompt.stories.map((story) => {
        return (
          <Story
            key={story._id}
            story={story} />
        )
      })
    return(
        <div className = "stories">
        {stories}
        </div>

    )
  }
}

export default Stories
