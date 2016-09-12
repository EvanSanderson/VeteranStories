import React, {Component} from 'react';

class UpdateStoryForm extends Component {
  constructor(){
    super()
    this.state = {
      story: []
    }
  }
  storyChange = (e) => {
    this.setState({
      story: e.target.value
    })
  }
  onUpdateStory = (e) => {
    e.preventDefault();
    var storyText = this.state.story
    this.props.updateStory(storyText)
    this.state.story = "";
  }
  render(){
    return(
      <form onSubmit={(e) => this.onUpdateStory(e)}>
        <input
          onChange = {(e) => this.storyChange(e)}
          value = {(this.state && this.state.story) || ''} />
        <button type="submit"> Update Story </button>
      </form>
    )
  }
}

export default UpdateStoryForm;
