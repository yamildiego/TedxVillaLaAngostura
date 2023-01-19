import React, { Component } from "react";
import Page from "./../Page";
import "./Ted.css";

class TedX extends Component {
  render() {
    return (
      <Page title="What is TEDx?">
        <div className="Ted">
          <p>
            In the spirit of spreading worthwhile ideas, TED has created a program called{" "}
            <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_black">
              TEDx
            </a>
            , made up of local, independently organized events that bring an audience together to share a TED-like experience.
          </p>
          <p>
            Our event is called TEDxVillaLaAngostura, where x means <span className="font-italic">“independently organized TED event”</span>
            . It is a non-profit event dedicated to spreading transformative ideas and inspiring the attending public, through talks that
            address a variety of topics. At our TEDxVillaLaAngostura event, pre-recorded TED Talks and live speakers will combine to promote
            in-depth discussions and encourage bonding among the audience.
          </p>
          <p>
            The 2019 edition is the first time that a TEDx event is held in VillaLaAngostura, and the second in the province of Neuquén.
          </p>
        </div>
      </Page>
    );
  }
}

export default TedX;
