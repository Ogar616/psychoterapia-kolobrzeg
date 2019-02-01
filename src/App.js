import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Offer from "./components/offer";
import Psycho from "./components/psychoteraphy";
import Contact from "./components/contact";
import Location from "./components/location";
import formContainer from "./components/formContainer";
import Footer from "./components/footer";

const App = () => (
  <Router>
    <>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/offer" component={Offer} />
      <Route path="/psychoteraphy" component={Psycho} />
      <Route path="/Contact" component={Contact} />
      <Route path="/location" component={Location} />
      <Route path="/contact" component={formContainer} />
      <Footer />
    </>
  </Router>
);

export default App;
