import React, {Component} from 'react';
import Stories from './Stories';

class Prompt extends Component {
  render(){
    // var stories = this.props.prompt.stories.map((story)=>{
    //   return (
    //     <p> {story.body} </p>
    //   )
    // })
    return(
      <div className= "prompt">
        <p> {this.props.prompt.body} </p>
        <Stories
          prompt= {this.props.prompt}
         stories= {this.props.prompt.stories}/>
      </div>
    )
  }
}

export default Prompt;
