import React, { Component } from 'react';
import './LogoHtml.css';

class LogoHtml extends Component {
    state = {}
    render() {
        return (
            <div className="LogoHtml">
                <span className="LogoHtmlName">TEDx</span>
                <span className="LogoHtmlCity">VillaLaAngostura</span>
                <div className="LogoHtmlInfo"><span>x</span> = evento ted organizado de forma independiente</div>
            </div>
        );
    }
}

export default LogoHtml;