import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "../Page";
import "./Collaborators.css";

class Collaborators extends Component {
  render() {
    return (
      <Page title="Colaboradores">
        <div className="Collaborators">
          {this.props.collaborators.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </div>
      </Page>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    collaborators: state.info[state.locale.lang].collaborators,
  };
}

export default connect(mapStateToProps)(Collaborators);
