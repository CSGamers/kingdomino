import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class King extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='king'></div>
    );
  }
}

export default King;
