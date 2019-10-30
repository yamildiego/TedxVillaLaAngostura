import React, { Component } from 'react';
import LogoHtml from './../LogoHtml/LogoHtml';
import EventInformation from './../EventInformation/EventInformation';
import './Main.css';

class Main extends Component {
    state = {}
    render() {
        return (
            <div className="MainBox">
                <div className="Main">
                    <div className="container">
                        <LogoHtml />
                        <hr />
                        <h1 className="MainTitle">
                            Tema: "Tema del tedx da a sada da"
                        </h1>
                        <hr />
                        <EventInformation />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;