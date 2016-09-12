import axios from 'axios';

function StoryModel(){};

StoryModel.create = function(story, prompt){
  var request = axios.post(`http://localhost:3002/prompts/${prompt._id}/stories`, story)
  return request;
}

StoryModel.update = function(prompt, storyId, storyText){
  var request = axios.put(`http://localhost:3002/prompts/${prompt._id}/stories/${storyId}`, {body: storyText})
  return request;
}
export default StoryModel;
