import React, { Component } from "react";
import Page from "./../Page";
import "./Ted.css";

class Ted extends Component {
  render() {
    return (
      <Page title="What is TED?">
        <div className="Ted">
          <p>
            TED is a nonprofit organization dedicated to <span className="font-italic">“ideas worth spreading.”</span> It began as a
            conference in California in 1984 and has greatly expanded to support those ideas that seek to change the world.
          </p>
          <p>
            TED's two annual conferences invite the world's leading thinkers and doers to give the talk of a lifetime in no more than 18
            minutes. Many of these talks are freely available on TED.com. The TED conference takes place in Vancouver, Canada. At TED.com,
            talks from conferences are shared with the world for free in video format. TED has launched The Audacious Project, which invites
            funding for different ideas with the potential to generate large-scale change.
          </p>
          <p>
            You can follow TED on Twitter at{" "}
            <a href="https://twitter.com/TEDTalks" target="_black">
              twitter.com/TEDTalks
            </a>
            , on Facebook at{" "}
            <a href="https://www.facebook.com/TED" target="_black">
              www.facebook.com/TED
            </a>{" "}
            , or on Instagram at{" "}
            <a href="https://instagram.com/TED" target="_black">
              instagram.com/TED
            </a>
            .
          </p>
        </div>
      </Page>
    );
  }
}

export default Ted;
