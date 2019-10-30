import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from './DrawerToggleButton';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Logo from './../../assets/images/logo.jpg';
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
                                        <img src={Logo} alt="Verde Agostini" />
                                    </Navbar.Brand>
                                </div>
                                <div className="col-9 d-none d-lg-block d-xl-block">
                                    <Nav className="mr-auto Menu">
                                        <Link to={'/'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.home" />
                                        </Link>
                                        <Link to={'/'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.home" />
                                        </Link>
                                        <Link to={'/'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.products" />
                                        </Link>
                                        <NavDropdown title="Acerca de" id="basic-nav-dropdown">
                                            <Link to={'/que-es-ted'} className="dropdown-item">
                                                <span>
                                                    <FormattedMessage locale={this.props.lang} id="nav.aboutus.ted" />
                                                </span>
                                            </Link>
                                            <Link to={'/que-es-tedx'} className="dropdown-item">
                                                <span>
                                                    <FormattedMessage locale={this.props.lang} id="nav.aboutus.tedx" />
                                                </span>
                                            </Link>
                                            <Link to={'/nosotros'} className="dropdown-item">
                                                <span>
                                                    <FormattedMessage locale={this.props.lang} id="nav.aboutus.aboutus" />
                                                </span>
                                            </Link>
                                        </NavDropdown>
                                        <Link to={'/contacto'} className="nav-link">
                                            <FormattedMessage locale={this.props.lang} id="nav.contact" />
                                        </Link>
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