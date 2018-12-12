import React, { Component } from 'react';


const QueuePieceBtn = (props) => (
  <button className="ui right button" id="queuePieceBtn" type="button" onClick={props.queuePiece}>
      Next
  </button>
);

export default QueuePieceBtn;