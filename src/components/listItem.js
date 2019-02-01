import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class ListItem extends Component {
  render() {
    return (
      <div data-aos="flip-left" data-aos-offset="50" data-aos-duration="1500">
        <li className="bg-light">{this.props.text}</li>
      </div>
    );
  }
}

export default ListItem;
