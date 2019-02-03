import React, { Component } from "react";

import navLinks from "./data/navLinks";

class NavButton extends Component {
  render() {
    return (
      <li className={this.props.isActive === true ? "active" : ""}>
        <a href={navLinks[this.props.index].link} >
          {navLinks[this.props.index].name}
        </a>
      </li>
    );
  }
}

export default NavButton;
