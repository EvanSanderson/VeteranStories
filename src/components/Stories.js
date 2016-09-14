import React, {Component} from 'react';
import Story from './Story';
import StoryModel from '../models/Story';
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
  renderStory = (key)=>{
    return <Story key={key} index={key} prompt={this.props.prompt} deleteStory = {this.deleteStory} story={this.state.stories[key]}/>
  }

  render(){
    if (this.props.prompt.stories) {
    return (
        <div className="stories">
        <button onClick={this.showStories}> Show stories </button>

        <CSSTransitionGroup
          className="stories"
          component="div"
          transitionName="stories"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={5000}>
        {Object.keys(this.state.stories).map(this.renderStory)}
        </CSSTransitionGroup>
        </div>

    )
  } else {
    return (
      <h1> Choose a prompt by clicking above. </h1>
    )
  }
  }
}

export default Stories
