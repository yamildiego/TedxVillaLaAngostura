import React, { Component } from "react";
import Page from "./../Page";
import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
  render() {
    return (
      <Page title="Contact Us">
        <ContactForm />
      </Page>
    );
  }
}

export default Contact;
