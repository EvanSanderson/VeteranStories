import React, {Component} from 'react';

class UpdateStoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: this.props.story.body
    }
  }
  storyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }
  updateStory = (e) => {
    e.preventDefault();
    var storyText = this.state.body
    this.props.updateStory(storyText)
    this.props.undoUpdateStory();
  }
  addTag = (e) => {
    e.preventDefault();
    var tag=this.refs.tag.value;
    this.props.addTag(tag)
  }
  render(){
    return(
      <div>
      <form onSubmit={(e)=>this.updateStory(e)}>
        <input
          className="storyChange"
          onChange={(e)=>this.storyChange(e)}
          value={(this.state && this.state.body) || ''} />
        <button type="submit" className="button"> Update Story </button>
      </form>
      <form className="addTag" onSubmit={(e)=>this.addTag(e)}>
      <input
        placeholder="Add A Tag"
        ref="tag"/>
        <button type="submit" className="button"> Add Tag </button>
        </form>
      </div>
    )
  }
}

export default UpdateStoryForm;
