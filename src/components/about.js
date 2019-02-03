import React, { Component } from "react";

import ListItem from "./listItem";
import listItems from "./data/aboutItemsList";

import img from "../assets/picture.jpg";

const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);

class About extends Component {
  render() {
    return (
      <div className="container">
        <section id="about">
          <div className="page-header">
            <h1>O mnie </h1>
          </div>
          <div className="col-md-6">
            <ul className="rolldown-list-small">{list}</ul>
          </div>
          <div className="col-md-6">
            <img src={img} alt="Moje zdjęcie" />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
