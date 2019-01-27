import React, { Component } from "react";

export default class About extends Component {
  render() {
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
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Certyfikowana psychoterapeutka PTP, psycholog, członkini
                Polskiego Towarzystwa Psychoterapii Psychoanalitycznej i
                Polskiego Towarzystwa Psychologicznego.
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Pracuje z osobami dorosłymi i młodzieżą.
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Doświadczenie zawodowe zdobywałam pracując w poradni
                psychologiczno-pedagogicznej, poradni uzależnień, w prywatnym
                gabinecie, w poradni zdrowia psychicznego i na oddziale
                psychiatrycznym.
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Ukończyłam Studium Psychoterapii Psychoanalitycznej i kontynuuję
                rozwój zawodowy uczestnicząc w seminariach
                kliniczno-superwizyjnych.
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                </button>
                Swoją pracę systematycznie superwizuję u superwizorów Polskiego
                Towarzystwa Psychoterapii Psychoanalitycznej i Polskiego
                Towarzystwa Psychoanalitycznego.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
