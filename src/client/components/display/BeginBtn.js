import React, { Component } from 'react';


const BeginBtn = (props) => (
  <button className="ui right button" id="beginBtn" type="button" onClick={props.skipPiece}>
      Begin
  </button>
);

export default BeginBtn;