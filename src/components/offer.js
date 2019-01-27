import React, { Component } from "react";

import listItems from './data/listItemsOffer';
import ListItem from './listItem';

class Offer extends Component {
  render() {
    const list = listItems.map((e, i) => <ListItem text={e.text} key={i}/>);
    return <>
         <div className="page-header">
          <h1>Oferta </h1>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <ul className="list-group">
            <p>
            Dla osób poszukujących pomocy psychologicznej, psychoterapii proponuję:
            </p>
              {list}
              <p>
              Forma pracy, w której spotkania odbywają się częściej nadaje ciągłość procesowi terapeutycznemu i stwarza stabilne, bezpieczne warunki do wnikliwszej pracy. Psychoterapia psychoanalityczna ma na celu pomoc pacjentowi w badaniu i przepracowaniu głębokich, często nieświadomych problemów emocjonalnych i umożliwia dalszy rozwój psychiczny, pełniejsze życie i ustąpienie lub zmniejszenie siły objawów.
              </p>
            </ul>
          </div>
          </div>
    </>;
  }
}

export default Offer;