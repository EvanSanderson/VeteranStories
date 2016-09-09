import React, {Component} from 'react';

class CreateStoryForm extends Component {
  submitStory=function(e){
    e.preventDefault();
    var storyText = this.refs.body.value
    this.props.createStory(storyText);
    this.refs.body.value = "";
  }
  render(){
    return(
      <div className="storyForm">
        <form onSubmit={(e) => this.submitStory(e)}>
          <input
            placeholder="Enter your story here"
            type="text"
            ref="body" />
            <button type="submit"> + Story </button>
          </form>
      </div>
    )
  }
}

export default CreateStoryForm
