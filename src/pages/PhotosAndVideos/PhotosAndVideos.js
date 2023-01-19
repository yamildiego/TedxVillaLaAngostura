import React, { Component } from "react";
import "./PhotosAndVideos.css";
import Page from "../Page";

class PhotosAndVideos extends Component {
  render() {
    return (
      <Page title="Photos and videos">
        <div className="PhotosAndVideos">
          <p className="text-center font-italic" style={{ color: "#777", cursor: "default" }}>
            Not available at the moment
          </p>
        </div>
      </Page>
    );
  }
}

export default PhotosAndVideos;
