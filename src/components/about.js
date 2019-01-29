import React, { Component } from "react";

import ListItem from "./listItem";
import listItems from "./data/aboutItemsList";
import runAnimation from "./runAnimation";

const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);

class About extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    return (
      <>
        <h1>O mnie </h1>
        <ul className="rolldown-list-small">{list}</ul>
      </>
    );
  }
}

export default About;
