import React, { Component } from "react";

import ListItem from "./listItem";
import listItems from "./data/aboutItemsList";
import runAnimation from "./data/runAnimation";

import img from "../assets/picture.jpg";

const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);

class About extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    return (
      <div className="container">
        <h1>O mnie </h1>
        <div className="col-md-6">
          <ul className="rolldown-list-small">{list}</ul>
        </div>
        <div className="col-md-6">
          <img src={img} alt="Moje zdjęcie" />
        </div>
      </div>
    );
  }
}

export default About;
