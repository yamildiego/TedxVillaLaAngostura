import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import Constants from "./../../config";
import "./MyData.css";

class MyData extends Component {
  render() {
    return (
      <div className="MyData">
        <h4>Contact information</h4>
        <div className="MyData">
          <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ paddingRight: "5px" }}>
              <FontAwesomeIcon className="MyDataIcon" icon="map-marker-alt" />
            </div>
            <input type="text" className="form-control" placeholder="" defaultValue={Constants.location} disabled />
            <input
              type="text"
              className="form-control"
              placeholder=""
              style={{ padding: "20px 35px" }}
              defaultValue={Constants.location1}
              disabled
            />
            <input
              type="text"
              className="form-control"
              placeholder=""
              style={{ padding: "20px 35px" }}
              defaultValue={Constants.location2}
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ paddingRight: "5px" }}>
              <FontAwesomeIcon className="MyDataIcon" icon="phone" />
            </div>
            <input type="text" className="form-control" placeholder="" defaultValue={Constants.number} disabled />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ paddingRight: "5px" }}>
              <FontAwesomeIcon className="MyDataIcon" icon="at" />
            </div>
            <input type="text" className="form-control" placeholder="" defaultValue={Constants.emailWebsite} disabled />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    lang: state.locale.lang,
  };
}

export default connect(mapStateToProps)(MyData);
