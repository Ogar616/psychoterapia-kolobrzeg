import React, { Component } from "react";

import img from '../assets/happy.png'

class Home extends Component {
  render() {
    return (
      <div>
        <img className='img-fluid' src={img} alt='Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska'/>
      </div>
    );
  }
}

export default Home;
