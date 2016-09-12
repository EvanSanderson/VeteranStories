import React, {Component} from 'react';
import UpdateStoryForm from './UpdateStoryForm';
import StoryModel from '../models/Story';

class Story extends Component {
  constructor(){
    super();
    this.state = {
      story: []
    }
  }
  componentDidMount(){
    this.getStory();
  }
  getStory(){
    this.setState({
      story: this.props.story
    })
  }
  updateStory = (storyText) => {
    console.log(this.props.prompt)
    console.log(this.props.story._id)
    var prompt = this.props.prompt
    var storyId = this.props.story._id
    StoryModel.update(prompt, storyId, storyText).then((res)=>{
      for(var i=0; i<res.data.stories.length; i++){
        if(res.data.stories[i]._id == storyId){
          console.log("FOUND MATCH")
          this.setState({
            story: res.data.stories[i]
          })
        }
      }
    })

  }
  render(){
    return(
      <div className="story">
          <p> {this.state.story.body} </p>
          <UpdateStoryForm
            updateStory = {this.updateStory}/>
      </div>
    )
  }
}

export default Story;
