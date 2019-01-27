import React, { Component } from "react";

import ListItem from './listItem';
import listItems from './data/listItemsAbout';

class About extends Component {
  render() {
    const list = listItems.map((e, i) => <ListItem text={e.text} key={i}/>);
    return (
      <>
        <div className="page-header">
          <h1>O mnie </h1>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <ul className="list-group">
            <p>
            Więcej informacji na mój temat
            </p>
              {list}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default About;
