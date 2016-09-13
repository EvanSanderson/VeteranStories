import axios from 'axios';

function StoryModel(){};

StoryModel.addTag = function(promptId, storyId, tag) {
  var request = axios.put(`http://localhost:3002/prompts/${promptId}/stories/${storyId}/addTag`, {tag: tag})
  return request;
}
StoryModel.create = function(story, prompt){
  var request = axios.post(`http://localhost:3002/prompts/${prompt._id}/stories`, story)
  return request;
}

StoryModel.update = function(prompt, storyId, storyText){
  var request = axios.put(`http://localhost:3002/prompts/${prompt._id}/stories/${storyId}`, {body: storyText})
  return request;
}

StoryModel.delete = function(promptId, storyId){
  var request = axios.delete(`http://localhost:3002/prompts/${promptId}/stories/${storyId}`)
  return request;
}


export default StoryModel;
