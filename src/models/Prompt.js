import axios from 'axios'

function PromptModel(){}

PromptModel.all = function(){
  var request = axios.get("http://localhost:3002/prompts")
  return request
}

PromptModel.create = function(prompt){
  var request = axios.post("http://localhost:3002/prompts", prompt)
  return request;
}



module.exports = PromptModel
