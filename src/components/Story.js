import React, {Component} from 'react';
import UpdateStoryForm from './UpdateStoryForm';
import StoryModel from '../models/Story';
import Tag from './Tag';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Story extends Component {
  constructor(){
    super();
    this.state = {
      story: [],
      tags: [],
      viewStory: true
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
        if(res.data.stories[i]._id === storyId){
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
  renderTag = (key) => {
    return <Tag key={key} index={key} tag={this.state.tags[key]} />
  }
  onUpdateStory = () => {
    this.setState({
      viewStory: false
    })
  }
  undoUpdateStory = () => {
    console.log("WORKING")
    this.setState({
      viewStory: true
    })
  }
  showStoryBody = () => {
    return (
    <p className="storyTextBody" onClick={(e)=>this.onUpdateStory()}>
    {this.state.story.body}
    </p>
  )
  }
  showStoryUpdate = () => {
    return(
      <div>
      <UpdateStoryForm
      story={this.state.story}
      undoUpdateStory={this.undoUpdateStory}
      updateStory={this.updateStory}
      addTag={this.addTag}/>
      </div>
    )
  }

  render(){
    return(
      <div className="story">
          {this.state.viewStory ? this.showStoryBody() : this.showStoryUpdate()}
          <h3> Tags </h3>
          <CSSTransitionGroup
              className="tags"
              component="ul"
              transitionName="tags"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1}>
              {Object.keys(this.state.tags).map(this.renderTag)}
          </CSSTransitionGroup>
          <button className="button" onClick={() => this.props.deleteStory(this.state.story)}>Delete</button>
      </div>
    )
  }
}

export default Story;
