import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import HandleError from './components/HandleError';
import Home from './components/Home';
import Ted from './pages/AboutUs/Ted';
import Tedx from './pages/AboutUs/Tedx';
import Speakers from './pages/Speakers/Speakers';
import Sponsors from './pages/Sponsors/Sponsors';
import Collaborators from './pages/Collaborators/Collaborators';
import Organization from './pages/Organization/Organization';
import Press from './pages/Press/Press';
import PhotosAndVideos from './pages/PhotosAndVideos/PhotosAndVideos';
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
            <Route path="/oradores" component={Speakers} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/colaboradores" component={Collaborators} />
            <Route path="/organizacion" component={Organization} />
            <Route path="/prensa" component={Press} />
            <Route path="/fotos-y-videos" component={PhotosAndVideos} />
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