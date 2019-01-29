import React, { Component } from "react";

import listItems from "./data/offerItemsList";
import diseasesList from "./data/diseasesItemsList";
import ListItem from "./listItem";
import runAnimation from "./runAnimation";

class Offer extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);
    const diseasesList2 = diseasesList.map((e, i) => (
      <ListItem text={e.text} key={i} />
    ));
    return (
      <>
        <h1>Oferta </h1>
        <ul className="rolldown-list">{list}</ul>
        <h3>Leczone choroby</h3>
        <ul className="rolldown-list-small">{diseasesList2}</ul>
        <p className="description">
          Forma pracy, w której spotkania odbywają się częściej nadaje ciągłość
          procesowi terapeutycznemu i stwarza stabilne, bezpieczne warunki do
          wnikliwszej pracy. Psychoterapia psychoanalityczna ma na celu pomoc
          pacjentowi w badaniu i przepracowaniu głębokich, często nieświadomych
          problemów emocjonalnych i umożliwia dalszy rozwój psychiczny,
          pełniejsze życie i ustąpienie lub zmniejszenie siły objawów.
        </p>
      </>
    );
  }
}

export default Offer;
