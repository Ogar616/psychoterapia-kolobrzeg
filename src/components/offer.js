import React, { Component } from "react";

import listItems from "./data/listItemsOffer";
import ListItem from "./listItem";
import runAnimation from "./runAnimation";

class Offer extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    const list = listItems.map((e, i) => <ListItem text={e.text} key={i} />);
    return (
      <>
        <h1>Oferta </h1>
        <ul className="rolldown-list">{list}</ul>
        <p className='description'>
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
