import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Page from './../Page';
import './AboutUs.css';

class TedX extends Component {
    state = {}
    render() {
        return (
            <Page>
                <div className="container AboutUs">
                    <h1>¿Qué es TEDx?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat ea dolore laboriosam provident dicta excepturi magnam! Optio perspiciatis aspernatur obcaecati placeat voluptatem enim ipsum tempore dolores non ipsa. Enim?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis? Iure quae sit deserunt sed odit harum nobis ut? Earum tempore harum doloremque commodi, quas placeat unde eaque quidem voluptate.
                    </p>
                    <Link to="/nosotros">Ir a Equipo Organizador</Link>
                </div>
            </Page>
        );
    }
}

export default TedX;