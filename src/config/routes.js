import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import PromptsContainer from '../containers/PromptsContainer';

module.exports = (
  <Route path='/' component={App}>
    <Route path='/prompts' component={PromptsContainer} />
  </Route>
)
