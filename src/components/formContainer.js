import React, { Component } from "react";
import Input from "./formComponents/input";
import Button from "./formComponents/button";
import TextArea from "./formComponents/textArea";

import formInputs from "./data/formInputs";

const inputs = formInputs.map(e => (
  <Input
    type={e.type}
    name={e.name}
    value={e.value}
    title={e.title}
    placeholder={e.placeholder}
  />
));

class FormContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-flex">
          <form
            className="form-group"
            action="https://formspree.io/kamil.sobczyk@wp.pl"
            method="POST"
          >
            {inputs}
            <TextArea
              title={"Twoja wiadomość"}
              rows={6}
              name={"message"}
              placeholder={"Tu wpisz swoją wiadomość"}
            />
            <Button title="Wyślij wiadomość">
              <input type="submit" value="Send" />
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormContainer;
