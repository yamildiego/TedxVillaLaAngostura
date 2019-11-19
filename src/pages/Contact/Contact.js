import React, { Component } from 'react';
import Page from './../Page';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
    state = {}
    render() {
        return (
            <Page title="Contacto">
                <ContactForm />
            </Page>
        );
    }
}

export default Contact;