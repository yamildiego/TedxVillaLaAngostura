import React, { Component } from "react";
import Header from "./../components/Header/Header";
import AlertCookies from "./Cookies/AlertCookies/AlertCookies";
import Footer from "./../components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faWhatsapp, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faHome,
  faCheck,
  faSpinner,
  faUser,
  faPhone,
  faEnvelope,
  faAt,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faReceipt,
  faTemperatureHigh,
  faSun,
  faVial,
  faVolumeMute,
  faFileAlt,
  faHeart,
  faCommentDollar,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTimes,
  faHome,
  faCheck,
  faSpinner,
  faUser,
  faPhone,
  faEnvelope,
  faAt,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faReceipt,
  faTemperatureHigh,
  faSun,
  faVial,
  faVolumeMute,
  faFileAlt,
  faHeart,
  faCommentDollar,
  faCloudShowersHeavy
);

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <AlertCookies />
        <div
          className={this.props.container === false ? "" : "container"}
          style={{ paddingTop: "130px", paddingBottom: "15px", minHeight: "86vh" }}
        >
          {this.props.title && <h1>{this.props.title}</h1>}
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
