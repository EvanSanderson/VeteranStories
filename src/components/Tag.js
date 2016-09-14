import React, {Component} from 'react';

class Tag extends Component {
  render(){
    return(
      <li className = "tag"> {this.props.tag}</li>
    )
  }
}

export default Tag
