import React from "react";

import img from "../assets/happy.png";

const Jumbotron = () => (
  <div className="jumbo">
      <div className='name'>Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska</div>
<div className='address'>ul. Łopuskiego 50A/15 78-100 Kołobrzeg</div>
    <img
      src={img}
      alt="Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska"
    />
  </div>
);

export default Jumbotron;
