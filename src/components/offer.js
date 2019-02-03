import React, { Component } from "react";

import ListItem from "./listItem";

import { diseasesList, itemsList } from "./data/offerItemsList";

const items = itemsList.map((e, i) => <ListItem text={e.text} key={i} />);
const diseases = diseasesList.map((e, i) => <ListItem text={e.text} key={i} />);

class Offer extends Component {
  render() {
    return (
      <div className="container">
        <section id="offer">
          <div className="page-header">
            <h1>Oferta </h1>
          </div>
          <ul className="rolldown-list">{items}</ul>
          <h3>Leczone choroby</h3>
          <ul className="rolldown-list-small">{diseases}</ul>
          <p className="description bg-light">
            Forma pracy, w której spotkania odbywają się częściej nadaje
            ciągłość procesowi terapeutycznemu i stwarza stabilne, bezpieczne
            warunki do wnikliwszej pracy. Psychoterapia psychoanalityczna ma na
            celu pomoc pacjentowi w badaniu i przepracowaniu głębokich, często
            nieświadomych problemów emocjonalnych i umożliwia dalszy rozwój
            psychiczny, pełniejsze życie i ustąpienie lub zmniejszenie siły
            objawów.
          </p>
        </section>
      </div>
    );
  }
}

export default Offer;
