import React, { Component } from "react";
import Board from "../display/Board";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CurrContainer from "../containers/CurrContainer";
import NextContainer from "../containers/NextContainer";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({
  shufflePieces: () => {
    dispatch(actions.shufflePieces());
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.shufflePieces();
  }

  render() {
    return (
      <div id="app">
        <Board id={1} />

        <CurrContainer />
        <NextContainer />
        <Board id={2} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
