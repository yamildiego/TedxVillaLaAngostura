import React, { Component } from 'react';
import Page from './../Page';
import './AboutUs.css';

class AboutUs extends Component {
    state = {}
    render() {
        return (
            <Page>
                <div className="container AboutUs">
                    <h1>Equipo Organizador</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe illo architecto eos sed. Sint odit quam dolore itaque earum repellendus autem cupiditate reiciendis quod? Modi necessitatibus iure eaque quam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolor impedit, obcaecati voluptatibus iusto laudantium perspiciatis, tempore repellendus a veniam, aperiam aliquam sint delectus adipisci eveniet. Obcaecati repellat autem iste?
                    </p>
                </div>
            </Page>
        );
    }
}

export default AboutUs;