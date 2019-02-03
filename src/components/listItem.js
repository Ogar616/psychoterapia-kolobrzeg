import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class ListItem extends Component {
  render() {
    return (
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1500">
        <li className="bg-light">{this.props.text}</li>
      </div>
    );
  }
}

export default ListItem;
