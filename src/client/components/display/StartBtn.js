import React, { Component } from "react";

const StartBtn = props => (
  <button className="ui right button is-large is-success is-rounded" id="startBtn" type="button" onClick={props.start}>
    Start
  </button>
);

export default StartBtn;