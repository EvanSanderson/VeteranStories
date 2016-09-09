import axios from 'axios'

function PromptModel(){}

PromptModel.all = function(){
  var request = axios.get("http://localhost:3002/prompts")
  return request
}

module.exports = PromptModel
