import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
        >
          <span className="glyphicon glyphicon-ok" aria-hidden="true" />
        </button>
        {this.props.text}
      </li>
    );
  }
}

export default ListItem;
