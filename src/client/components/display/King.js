import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import kingRed from '../../assets/img/kingRed.png'
import kingBlue from '../../assets/img/kingBlue.png'


class King extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let image;
    this.props.color === 'red' ? image = kingRed : image = kingBlue;

    return (
      <div>
        <img className="king" src={image} />
      </div>
    );
  } 
}

export default King;
