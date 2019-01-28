import React, { Component } from "react";

import ListItem from "./listItem";
import listItems from "./data/listItemsAbout";
import runAnimation from "./runAnimation";

class About extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);
    return (
      <>
        <h1>O mnie </h1>
        <ul className="rolldown-list">{list}</ul>
      </>
    );
  }
}

export default About;
