import React, {Component} from 'react';

class Story extends Component {
  render(){
    return(
      <div className= "story">
          <p> {this.props.story.body} </p>
      </div>
    )
  }
}

export default Story;
