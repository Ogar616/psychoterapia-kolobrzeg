import React, { Component } from "react";

class ContactInformations extends Component {
  render() {
    return (
      <div className="container contact">
        <div className="row">
          <div
            className="col-md-4 col-md-offset-2  contact1"
            data-aos="flip-left"
            data-aos-offset="100"
            data-aos-duration="1500"
          >
            Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska{" "}
            <br />
            ul. Łopuskiego 50A/15 78-100 Kołobrzeg
          </div>
          <div
            className="col-md-4"
            data-aos="flip-right"
            data-aos-offset="100"
            data-aos-duration="1500"
          >
            <a href="tel:+48505155252"> 505 155 252</a>
            <br /> psychoterapia.kolobrzeg@gmail.com <br /> NIP - 671 112 96 36{" "}
            <br /> REGON - 330496250
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInformations;
