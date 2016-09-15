import React, {Component} from 'react';
import StoryModel from '../models/Story';
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
      // renderRead = (key) => {
      //   return <div key={key} index={key}>{story.body}</div>
      // }
  render(){
    var stories=this.state.searchedStories.map((story)=>{
      return <p className="read" key={Math.random()}> {story.body} </p>
    })
    return(
      <div>
      <form className ="searchForm" onSubmit={(e) => this.searchStories(e)}>
      <input
      placeholder="Search stories"
      ref="input" />
      <button type="submit"> Search </button>
      </form>
      <h3 className="searchTags"> Search for stories by tags. </h3>
       <CSSTransitionGroup
        component="div"
        transitionName="reads"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {stories}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default StoriesContainer;
