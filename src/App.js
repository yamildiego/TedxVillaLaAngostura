import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import HandleError from './components/HandleError';
import Home from './components/Home';
import Ted from './pages/AboutUs/Ted';
import Tedx from './pages/AboutUs/Tedx';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import CookiesPolicy from './pages/Cookies/CookiesPolicy/CookiesPolicy';
import messages from './lang';
import es from 'react-intl/locale-data/es';

addLocaleData([...es])

class App extends Component {
  render() {
    return (
      <HandleError>
        <IntlProvider locale={"es"} messages={messages}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/que-es-ted" component={Ted} />
            <Route path="/que-es-tedx" component={Tedx} />
            <Route path="/nosotros" component={AboutUs} />
            <Route path="/contacto" component={Contact} />
            <Route path="/politica-de-cookies" component={CookiesPolicy} />
          </Switch>
        </IntlProvider>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  return {}
}

export default withRouter(connect(mapStateToProps)(App));