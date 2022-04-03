import React, { Component } from "react";
import Page from "../Page";
import ListCardOrganizers from "./ListCardOrganizers/ListCardOrganizers";
import "./Organization.css";

class Organization extends Component {
  render() {
    return (
      <Page>
        <div className="container AboutUs">
          <h1>Equipo organizador</h1>
          <ListCardOrganizers />
        </div>
      </Page>
    );
  }
}

export default Organization;
