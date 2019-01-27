import React, { Component } from "react";

export default class Offer extends Component {
  render() {
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
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Konsultacje psychologiczne (spotkania służące rozpoznaniu problemów i ustaleniu najlepszej formy pomocy dla zgłaszającej się osoby)
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Konsultacje dla par
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Psychoterapię krótkoterminową (kilka do kilkunastu spotkań, których celem jest pomoc osobom przeżywającym kryzys np. znacząca zmiana sytuacji życiowej, rozwód itp.)
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Psychoterapię psychoanalityczną (forma pracy, w której nie określa się na wstępie czasu trwania terapii. Odbywa się z częstotliwością minimum 2 x w tygodniu, oferowana jest osobom mającym wewnętrzną gotowość do pracy nad sobą, pragnącym zrozumieć i rozwiązać swoje konflikty wewnętrzne będące źródłem cierpienia.
              </li>
              <p>
              Forma pracy, w której spotkania odbywają się częściej nadaje ciągłość procesowi terapeutycznemu i stwarza stabilne, bezpieczne warunki do wnikliwszej pracy. Psychoterapia psychoanalityczna ma na celu pomoc pacjentowi w badaniu i przepracowaniu głębokich, często nieświadomych problemów emocjonalnych i umożliwia dalszy rozwój psychiczny, pełniejsze życie i ustąpienie lub zmniejszenie siły objawów.
              </p>
            </ul>
          </div>
          </div>
    </>;
  }
}
