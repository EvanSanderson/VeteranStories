import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render(){
    return(
      <div>
      <h1> <Link to={'/prompts'}>Veterans Stories </Link></h1>
      <h3> Welcome to the page. </h3>
      </div>
    )
  }
}

export default Header
