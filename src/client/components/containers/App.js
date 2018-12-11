import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';


const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="app">

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

