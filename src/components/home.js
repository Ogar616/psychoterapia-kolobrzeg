import React, { Component } from "react";

import Jumbotron from "./jumbotron";
import ContactInformations from "./contactInformations";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <div className="container">
          <ContactInformations />
        </div>
      </>
    );
  }
}

export default Home;
