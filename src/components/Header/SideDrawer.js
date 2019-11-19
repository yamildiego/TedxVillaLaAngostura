import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import './styles/SideDrawer.css'

class SideDrawer extends React.PureComponent {
    handleClick = () => {
        window.scrollTo(0, 0);
        this.props.handleClickCloseMenu();
    }
    render() {
        let drawerClasses = 'SideDrawer';
        if (this.props.sideDrawerOpen) {
            drawerClasses = 'SideDrawer SideDrawerOpen';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <FormattedMessage locale={this.props.lang} id="nav.inicio" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/oradores'}>
                            <FormattedMessage locale={this.props.lang} id="nav.oradores" />
                        </Link>
                    </li>
                    <li>
                        <FormattedMessage locale={this.props.lang} id="nav.socios">
                            {
                                text =>
                                    <NavDropdown title={text} id="basic-nav-dropdown" style={{ color: 'red' }}>
                                        <Link to={'/sponsors'} className="dropdown-item">
                                            <span>
                                                <FormattedMessage locale={this.props.lang} id="nav.socios.sponsors" />
                                            </span>
                                        </Link>
                                        <Link to={'/colaboradores'} className="dropdown-item">
                                            <span>
                                                <FormattedMessage locale={this.props.lang} id="nav.socios.colaboradores" />
                                            </span>
                                        </Link>
                                    </NavDropdown>
                            }
                        </FormattedMessage>
                    </li>
                    <li>
                        <Link to={'/organizacion'}>
                            <FormattedMessage locale={this.props.lang} id="nav.organizacion" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/prensa'}>
                            <FormattedMessage locale={this.props.lang} id="nav.prensa" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/fotos-y-videos'}>
                            <FormattedMessage locale={this.props.lang} id="nav.fotos.y.videos" />
                        </Link>
                    </li>
                    <li>
                        <FormattedMessage locale={this.props.lang} id="nav.acerca.de">
                            {
                                text =>
                                    <NavDropdown title={text} id="basic-nav-dropdown" style={{ color: 'red' }}>
                                        <Link to={'/que-es-ted'} className="dropdown-item">
                                            <span>
                                                <FormattedMessage locale={this.props.lang} id="nav.ted" />
                                            </span>
                                        </Link>
                                        <Link to={'/que-es-tedx'} className="dropdown-item">
                                            <span>
                                                <FormattedMessage locale={this.props.lang} id="nav.tedx" />
                                            </span>
                                        </Link>
                                    </NavDropdown>
                            }
                        </FormattedMessage>
                    </li>
                    <li>
                        <Link to={'/contacto'}>
                            <FormattedMessage locale={this.props.lang} id="nav.contacto" />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(SideDrawer);