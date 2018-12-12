import React, { Component } from 'react';


const QueuePieceBtn = (props) => (
  <button className="btn" type="button" onClick={props.queuePiece}>
      Next
  </button>
);

export default QueuePieceBtn;