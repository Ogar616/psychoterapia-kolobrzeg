import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <li className="navbar-brand">
            <Link to="/about"> Psychoterapeuta - Psycholog
              </Link>
            </li>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
              <Link to="/about">O mnie
              </Link>
              </li>
              <li>
              <Link to="/offer">Oferta</Link>
              </li>
              <li>
              <Link to="/psychoteraphy">O psychoterapia</Link>
              </li>
              
            </ul>
            
            <ul className="nav navbar-nav navbar-right">
              <li>
              <Link to="/location">Jak dojadę?</Link>
              </li>
              <li>
              <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
