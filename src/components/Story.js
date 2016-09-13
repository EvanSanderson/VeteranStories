import React, {Component} from 'react';
import UpdateStoryForm from './UpdateStoryForm';
import StoryModel from '../models/Story';
import Tag from './Tag';

class Story extends Component {
  constructor(){
    super();
    this.state = {
      story: [],
      tags: []
    }
  }
  componentDidMount(){
    this.getStory();
  }
  getStory(){
    this.setState({
      story: this.props.story,
      tags: this.props.story.tags
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
  addTag = (tag) => {
    var promptId = this.props.prompt._id
    console.log(this.props)
    var storyId = this.props.story._id
    StoryModel.addTag(promptId, storyId, tag).then((res) =>{
        console.log(res)
    })
    this.state.tags.push(tag);
    this.setState({
      tags: this.state.tags
    })
  }


  render(){
    return(
      <div className="story">
          <p> {this.state.story.body} </p>
          {this.state.tags.map((tag)=>{
            return <p key={Math.random()}> {tag} </p>
          })}
            <UpdateStoryForm
            updateStory = {this.updateStory}
            addTag = {this.addTag}/>
            <button className="deleteButton" onClick={() => this.props.deleteStory(this.state.story)}>Delete</button>
      </div>
    )
  }
}

export default Story;
