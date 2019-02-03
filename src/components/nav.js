import React, { Component } from "react";

import NavButton from "./navButton";
import navLinks from "./data/navLinks";

import img from "../assets/logo4.png";

class Nav extends Component {
  componentDidMount() {
    window.onscroll = () => {
      stickIt();
    };

    const navbar = document.getElementsByTagName("nav")[0];
    const sticky = navbar.offsetTop;

    const stickIt = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };
  }
  render() {
    const nav = navLinks.map((e, i) => {
      return <NavButton index={i} key={i} />;
    });
    const navLeft = nav.filter((e, i) => i < 3);
    const navRight = nav.filter((e, i) => i > 2);
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
            <li className="navbar-brand" onClick={this.handleBrandClick}>
              {" "}
              <img className="logo" src={img} alt="logo" />
            </li>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">{navLeft}</ul>
            <ul className="nav navbar-nav navbar-right">{navRight}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
