import React, { Component } from "react";
import { Link } from "react-router-dom";

import navLinks from "./data/navLinks";

class NavButton extends Component {
  render() {
    return (
      <li className={this.props.isActive === true ? "active" : ""}>
        <Link to={navLinks[this.props.index].link} onClick={this.props.handleClick}>{navLinks[this.props.index].name}</Link>
      </li>
    );
  }
}

export default NavButton;
