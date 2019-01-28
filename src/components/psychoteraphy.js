import React, { Component } from "react";

import { text1, text2 } from "./data/aboutPsychoTexts";

class Psycho extends Component {
  render() {
    return (
      <>
        <div className="page-header">
          <h1>O psychoterapii </h1>
        </div>
        <h3>Czym jest psychoterapia?</h3>
        <p className="description">{text1}</p>
        <h3>Wskazania do podjęcia psychoterapii</h3>
        <p className="description">{text2}</p>
      </>
    );
  }
}

export default Psycho;
