import React, { Component } from "react";
import { connect } from "react-redux";
import { CardGroup, Card } from "react-bootstrap";
import ModalContainer from "../../components/Modal/ModalContainer";
import Modal from "../../components/Modal/Modal";
import Page from "../Page";
import SpeakerView from "./SpeakerView";
import * as actions from "../../actions/locale";
import "./Speakers.css";

class Speakers extends Component {
  openModal = (item) => {
    this.props.dispatch(actions.speakerSet(item));
    this.props.dispatch(actions.modalSpeakerSet(true));
  };

  closeModal = () => this.props.dispatch(actions.modalSpeakerSet(false));

  render() {
    return (
      <Page title="Oradores">
        <div className="Speakers">
          <CardGroup>
            {this.props.speakers.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="pointer"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    this.openModal(item);
                  }}
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: "16px" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text className="TextTitle">"{item.title}"</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </div>
        {this.props.modalSpeaker && (
          <ModalContainer>
            <Modal closeModal={this.closeModal}>
              <SpeakerView />
            </Modal>
          </ModalContainer>
        )}
      </Page>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    speakers: state.info[state.locale.lang].speakers,
    modalSpeaker: state.general.modalSpeaker,
  };
}

export default connect(mapStateToProps)(Speakers);
