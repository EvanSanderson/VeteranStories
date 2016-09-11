import axios from 'axios';

function StoryModel(){};

StoryModel.create = function(story, prompt){
  var request = axios.post(`http://localhost:3002/prompts/${prompt._id}/stories`, story)
  return request;
}

export default StoryModel;
