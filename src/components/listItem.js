import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className='bg-light'>
        {this.props.text}
      </li>
    );
  }
}

export default ListItem;
