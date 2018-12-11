import React, { Component } from "react";
import Board from "../display/Board";
// import { connect } from "react-redux";
// import * as actions from '../../actions/actions';

// const mapStateToProps = store => ({
//   store
// });

// const mapDispatchToProps = dispatch => ({});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="app">
        <Board />
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
