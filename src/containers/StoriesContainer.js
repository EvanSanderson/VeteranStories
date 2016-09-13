import React, {Component} from 'react';
import StoryModel from '../models/Story';

class StoriesContainer extends Component {
  constructor(){
    super()
    this.state = {
      stories: [],
      searchedStories: []
    }
  }
  componentDidMount(){
    this.getStories()
  }
  getStories(){
    console.log("DID MOUNT")
    StoryModel.all().then((res) => {
      console.log(res.data)
      this.setState ({
        stories: res.data,
      })
    })
  }
  searchStories = (e) => {
    e.preventDefault();
    console.log(this.refs.input.value)
    console.log("search working")
    var input = this.refs.input.value
    var stories = []
    for(var i=0;i<this.state.stories.length;i++){
          var myarr = this.state.stories[i].tags
          var arraycontainsinput = (myarr.indexOf(input) > -1);
          if(arraycontainsinput){
            stories.push(this.state.stories[i])
            console.log(stories)
          }
        }
        this.setState({
          searchedStories: stories
        })
      }
  render(){
    var stories = this.state.searchedStories.map((story)=>{
      return <p key={Math.random()}> {story.body} </p>
    })
    return(
      <div>
      <h1> Stories </h1>
       {stories}
       <form onSubmit={(e) => this.searchStories(e)}>
        <input
          placeholder = "Search stories"
          ref = "input" />
        <button type = "submit"> Search </button>
        </form>
      </div>
    )
  }
}

export default StoriesContainer;
/* eslint-disable */
