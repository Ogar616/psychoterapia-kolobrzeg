import React, { Component } from "react";
import Input from "./formComponents/input";
import Button from "./formComponents/button";
import TextArea from "./formComponents/textArea";

import formInputs from "./data/formInputs";

const inputs = formInputs.map((e, i) => (
  <Input
    type={e.type}
    name={e.name}
    value={e.value}
    title={e.title}
    placeholder={e.placeholder}
    key={i}
  />
));

class FormContainer extends Component {
  render() {
    return (
      <div className="container">
        <section id="form">
          <div className="page-header">
            <h1>Napisz do mnie!</h1>
          </div>
          <div className="row-flex">
            <form
              className="form-group"
              action="https://formspree.io/kamil.sobczyk@wp.pl"
              method="POST"
            >
              {inputs}
              <TextArea
                title={"Twoja wiadomość"}
                rows={6}
                name={"Wiadomość do Ciebie"}
                placeholder={"Tu wpisz swoją wiadomość"}
              />
              <Button title="Wyślij wiadomość">
                <input type="submit" value="Send" />
              </Button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default FormContainer;
