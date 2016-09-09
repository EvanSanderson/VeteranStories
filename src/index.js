import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
import './index.css';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);