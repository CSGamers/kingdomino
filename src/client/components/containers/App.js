import React, { Component } from "react";
import Board from "../display/Board";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="app">
        <Board />
        <Piece contents={["1a", "1b"]} id="P1" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
