import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import crown from '../../assets/img/crown2.png'

class Crown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='crown'>
        <img className='crown' src={crown} ></img>
      </div>
    );
  }
}

export default Crown;
