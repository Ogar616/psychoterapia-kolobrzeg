import React, { Component } from "react";

import Jumbotron from "./jumbotron";

// import img from '../assets/happy.png'

class Home extends Component {
  render() {
    return (
      <>
      {/* <div>
        <img className='img-fluid' src={img} alt='Gabinet Psychologiczny i Psychoterapeutyczny Edyta Łuców-Stepczyńska'/>
      </div> */}
       <Jumbotron />
      
      </>
      
    );
  }
}

export default Home;
