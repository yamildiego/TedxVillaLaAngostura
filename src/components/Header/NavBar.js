import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from './DrawerToggleButton';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import LogoHtml from './../LogoHtml/LogoHtml';
import { connect } from 'react-redux';
import './styles/NavBar.css';

class NavBar extends React.Component {
    state = { isTop: true }
    componentDidMount = () => {
        document.addEventListener('scroll', this.checkScroll);
    }
    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.checkScroll);
    }
    checkScroll = () => {
        const isTop = window.scrollY < 30;
        if (isTop !== this.state.isTop) this.setState({ isTop })
    }
    render() {
        return (
            <div>
                <Navbar expand="lg" className={(this.state.isTop ? "NavBar NavBarTop position-fixed w-100" : "NavBar NavBarFix position-fixed w-100")}>
                    <div className="container-fluid">
                        <div className="NavBarMenu w-100">
                            <div className="row">
                                <div className="NavBarBtnMenu col-lg-1 col-4 d-lg-none d-xl-none">
                                    <DrawerToggleButton handleClickOpenMenu={this.props.handleClickOpenMenu} />
                                </div>
                                <div className="col-lg-3 col-4 text-center">
                                    <Navbar.Brand className="LogoMenu" href="/">
                                        <LogoHtml size="2.5rem" color="black" />
                                    </Navbar.Brand>
                                </div>
                                <div className="col-9 d-none d-lg-block d-xl-block pl-5">
                                    <Nav className="mr-auto Menu">
                                        <Link to={'/'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.inicio" />
                                        </Link>
                                        <Link to={'/oradores'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.oradores" />
                                        </Link>
                                        <FormattedMessage locale={this.props.lang} id="nav.socios">
                                            {
                                                text =>
                                                    <NavDropdown title={text} id="basic-nav-dropdown">
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
                                        <Link to={'/organizacion'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.organizacion" />
                                        </Link>
                                        <Link to={'/prensa'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.prensa" />
                                        </Link>
                                        <Link to={'/fotos-y-videos'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.fotos.y.videos" />
                                        </Link>
                                        <FormattedMessage locale={this.props.lang} id="nav.acerca.de">
                                            {
                                                text =>
                                                    <NavDropdown title={text} id="basic-nav-dropdown">
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
                                        <FormattedMessage locale={this.props.lang} id="nav.contacto">
                                            {
                                                text =>
                                                    <NavDropdown title={text} id="basic-nav-dropdown">
                                                        <Link to={'/como-llegar'} className="dropdown-item">
                                                            <span>
                                                                <FormattedMessage locale={this.props.lang} id="nav.contacto.como.llegar" />
                                                            </span>
                                                        </Link>
                                                        <Link to={'/contacto'} className="dropdown-item">
                                                            <span>
                                                                <FormattedMessage locale={this.props.lang} id="nav.contacto.contactanos" />
                                                            </span>
                                                        </Link>
                                                    </NavDropdown>
                                            }
                                        </FormattedMessage>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: "es"
    }
}

export default connect(mapStateToProps)(NavBar);