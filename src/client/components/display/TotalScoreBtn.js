import React, { Component } from "react";

const TotalScoreBtn = props => (
  <button className="ui right button" id="totalScoreBtn" type="button" onClick={props.count}>
    Total Score
  </button>
);

export default TotalScoreBtn;
