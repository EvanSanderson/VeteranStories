import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import PromptsContainer from '../containers/PromptsContainer';
import StoriesContainer from '../containers/StoriesContainer';

module.exports = (
  <Route path='/' component={App}>
    <Route path='/prompts' component={PromptsContainer} />
    <Route path='/stories' component={StoriesContainer} />
  </Route>
)
