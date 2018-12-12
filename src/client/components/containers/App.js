import React, { Component } from "react";
import Board from "../display/Board";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CurrContainer from "../containers/CurrContainer";
import NextContainer from "../containers/NextContainer";
import NextPiece from "./NextPiece";

const mapStateToProps = store => ({
  boards: store.game.boards
});

const mapDispatchToProps = dispatch => ({
  shufflePieces: () => {
    dispatch(actions.shufflePieces());
  },
  populateNext: () => {
    dispatch(actions.populateNext());
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.shufflePieces();
    this.props.populateNext();
  }

  render() {
    console.log('boards', this.props.boards);
    return (
      <div id="app">
        <Board id={1} contents={this.props.boards.board1}/>
        <div className="controls">
          <CurrContainer />
          <NextContainer />
          <NextPiece />
        </div>
        <Board id={2} contents={this.props.boards.board2} />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
