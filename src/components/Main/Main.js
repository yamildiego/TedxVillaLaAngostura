import React, { Component } from 'react';
// import LogoHtml from './../LogoHtml/LogoHtml';
import EventInformation from './../EventInformation/EventInformation';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="Main" style={{ marginTop: "10px" }}>
                <div className="container" style={{ paddingTop: "10px" }}>
                    {/* <LogoHtml /> */}
                    <hr />
                    <h1 className="MainTitle">
                        Tema: "Pensando el futuro"
                        </h1>
                    <hr />
                    <EventInformation />
                </div>
            </div>
        );
    }
}

export default Main;