import React, { Component } from "react";

const Next4Btn = props => (
  <button className="ui right button" type="button" onClick={props.dealPieces}>
    Deal
    <i class="left arrow icon" />
  </button>
);

export default Next4Btn;
