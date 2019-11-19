import React, { Component } from 'react';
import './LogoHtml.css';

class LogoHtml extends Component {
    render() {
        return (
            <div className="LogoHtml" style={{ fontSize: (this.props.size ? this.props.size : '3.75rem') }}>
                <span className="LogoHtmlName">TEDx</span>
                <span className="LogoHtmlCity" style={{ color: (this.props.color ? this.props.color : 'white') }}>VillaLaAngostura</span>
                <div className="LogoHtmlInfo" style={{ color: (this.props.color ? this.props.color : 'white') }}><span>x</span> = evento ted organizado de forma independiente</div>
            </div>
        );
    }
}

export default LogoHtml;