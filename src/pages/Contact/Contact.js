import React, { Component } from 'react';
import Page from './../Page';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
    state = {}
    render() {
        return (
            <Page>
                <div className="container" style={{ paddingTop: '100px' }}>
                    <h1>Contacto</h1>
                    <ContactForm />
                </div>
            </Page>
        );
    }
}

export default Contact;