import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./../pages/Page";
import Main from "./Main/Main";
import { Zoom } from "react-slideshow-image";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

class Home extends Component {
  render() {
    return (
      <Page container={false}>
        <div className="slide-container" style={{ paddingTop: "20px" }}>
          <Zoom {...zoomOutProperties}>
            {this.props.images.map((item) => (
              <img key={item.id} style={{ width: "100%", height: "30vw", objectFit: "cover" }} src={item.image} alt="" />
            ))}
          </Zoom>
        </div>
        <Main />
        <div className="container mt-2">
          <h2 style={styles.title}>WHAT IS TEDxVILLALAANGOSTURA?</h2>
          <p>
            The 2019 edition is the first time that a TEDx event is held in VillaLaAngostura, and the second in the province of Neuquén.
          </p>
          <p>
            Our event is called <span className="font-weight-bolder">TEDxVillaLaAngostura</span>, where x means{" "}
            <span className="font-italic">“independently organized TED event”</span>. It is a non-profit event dedicated to spreading
            transformative ideas and inspiring the attending public, through talks that address a variety of topics. At
            TEDxVillaLaAngostura, pre-recorded TED and TEDx talks and live speakers will combine to promote in-depth discussions and
            encourage bonding among the audience.
          </p>
          <p>
            This year's topic is <span className="font-weight-bolder font-italic">“Thinking about the future”</span>, and that is our
            commitment: to motivate those who attend the event and inspire them to positively transform reality.
          </p>
        </div>
      </Page>
    );
  }
}

const styles = {
  title: {
    fontSize: "1.5rem",
  },
};

function mapStateToProps(state, props) {
  return {
    images: state.info[state.locale.lang].imageHome,
  };
}

export default connect(mapStateToProps)(Home);
