import React, { Component } from "react";

import ListItem from "./listItem";

import { text1, list } from "./data/psychoteraphy";

const list2 = list.map((e, i) => <ListItem text={e.text} key={i} />);

class Psycho extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>O&nbsp;psychoterapii </h1>
        </div>
        <h3>Czym jest psychoterapia?</h3>
        <p className="description bg-light">{text1}</p>
        <h3>Wskazania do podjęcia psychoterapii</h3>
        <ul className={"rolldown-list-small"}>{list2}</ul>
      </div>
    );
  }
}

export default Psycho;
