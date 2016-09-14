import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render(){
    return(
      <div>
      <header> <Link to={'/prompts'}> Start Writing </Link> | <Link to={'/stories'}> Start Reading </Link> </header>
      <div className= "header">
      <h1> Veteran Stories </h1>
      <h3> But man is not made for defeat. A man can be destroyed but not defeated. - Hemingway </h3>
      </div>
      </div>
    )
  }
}

export default Header
