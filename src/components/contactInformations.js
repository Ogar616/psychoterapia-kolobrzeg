import React, { Component } from "react";

class ContactInformations extends Component {
  render() {
    return (
      <div className="container contact">
        <div className="col-md-4 col-md-offset-2">
          Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska
          ul. Łopuskiego 50A/15 78-100 Kołobrzeg
        </div>
        <div className="col-md-4">
          <a href="tel:+48505155252" />
          505 155 252 psychoterapia.kolobrzeg@gmail.com <br /> NIP - 671 112 96
          36 <br /> REGON - 330496250
        </div>
      </div>
    );
  }
}

export default ContactInformations;
