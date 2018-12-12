import React, { Component } from 'react';
import { connect } from 'react-redux';


const Next4Btn = (props) => (
  <button className="btn" type="button" onClick={props.dealPieces}>
      Deal
  </button>
);

export default Next4Btn;