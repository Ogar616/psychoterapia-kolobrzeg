import React, { Component } from "react";

import Jumbotron from "./jumbotron";
import ContactInformations from "./contactInformations";

class Home extends Component {
  render() {
    return (
      <section id='home'>
        <Jumbotron />
        <div className="container">
          <ContactInformations />
        </div>
      </section>
    );
  }
}

export default Home;
