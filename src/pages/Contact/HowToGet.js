import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Page from "../Page";
import MyData from "./MyData";
import Map from "./../../assets/images/mapa.png";

class HowToGet extends Component {
  render() {
    return (
      <Page title="Cómo llegar">
        <Row>
          <Col xs={12} md={6}>
            <Image src={Map} fluid rounded />
          </Col>
          <Col xs={12} md={6}>
            <MyData />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default HowToGet;
