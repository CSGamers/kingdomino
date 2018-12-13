import React, { Component } from 'react';


const SkipBtn = (props) => (
  <button className="ui right button" id="skipBtn" type="button" onClick={props.skipPiece}>
      Skip
  </button>
);

export default SkipBtn;