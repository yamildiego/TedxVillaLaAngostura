import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col } from "react-bootstrap";

class SpeakerView extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <Image src={this.props.speaker.image} rounded fluid />
              <h5>{this.props.speaker.name}</h5>
            </Col>
            <Col xs={12} md={8}>
              <h4 className="text-center" style={{ fontStyle: "italic" }}>
                "{this.props.speaker.title}"
              </h4>
              <p style={{ fontSize: "14px", textAlign: "justify" }}>{this.props.speaker.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    speaker: state.general.speakerSelected,
  };
}

export default connect(mapStateToProps)(SpeakerView);
