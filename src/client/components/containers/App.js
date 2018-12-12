import React, { Component } from "react";
import Board from "../display/Board";
import King from "../display/King";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CurrContainer from "../containers/CurrContainer";
import NextContainer from "../containers/NextContainer";
import NextPieceContainer from "./NextPieceContainer";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

const mapStateToProps = store => ({
  boards: store.game.boards,
});

const mapDispatchToProps = dispatch => ({
  shufflePieces: () => {
    dispatch(actions.shufflePieces());
  },
  populateNext: () => {
    dispatch(actions.populateNext());
  },
  chooseStartingPlayer: () => {
    dispatch(actions.chooseStartingPlayer());
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.shufflePieces();
    this.props.populateNext();
    this.props.chooseStartingPlayer();
  }

  render() {
    console.log("boards", this.props.boards);
    return (
      <div id="app">
        <div id="board1Container">
          <Board id='board1' contents={this.props.boards.board1}/>
          <div className="kingContainer">
            <King color="red" />
            <King color="red" />
          </div>
        </div>
        <div className="controls">
          <CurrContainer />
          <NextContainer />
          <NextPieceContainer />
        </div>
        <div id="board2Container">
          <Board id='board2' contents={this.props.boards.board2}/>
          <div className="kingContainer">
            <King color="blue" />
            <King color="blue" />
          </div>
        </div>

      </div>
    );
  }
}
App = DragDropContext(HTML5Backend)(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
