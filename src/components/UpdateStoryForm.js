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
  addTag = (e) => {
    e.preventDefault();
    var tag = this.refs.tag.value;
    this.props.addTag(tag)
  }
  render(){
    return(
      <div>
      <form onSubmit={(e) => this.onUpdateStory(e)}>
        <input
          onChange = {(e) => this.storyChange(e)}
          value = {(this.state && this.state.story) || ''} />
        <button type="submit"> Update Story </button>
      </form>
      <form onSubmit={(e) => this.addTag(e)}>
      <input
        placeholder = "Add A Tag"
        ref = "tag"/>
        <button type="submit"> Add Tag </button>
        </form>
      </div>
    )
  }
}

export default UpdateStoryForm;
