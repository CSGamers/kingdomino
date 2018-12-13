import React, { Component } from "react";
import Board from "../display/Board";
import King from "../display/King";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CurrContainer from "../containers/CurrContainer";
import NextContainer from "../containers/NextContainer";
import NextPieceContainer from "./NextPieceContainer";
import logo from '../../assets/img/kingdomino.png'

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import TotalScoreBtn from "../display/TotalScoreBtn";
import ActivePiecesContainer from "./ActivePiecesContainer";
import Message from "../display/Message";

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
  },
  tallyScore: () => {
    dispatch(actions.tallyScore());
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
        <div id="boardContainer">
          <Board id='board1' contents={this.props.boards.board1}/>
          <div className="kingContainer">
            <King color="red" />
            <King color="red" />
          </div>
        </div> 
        <div className="controls">
          <img className="logo" src={logo} />  
          <Message />
          <ActivePiecesContainer />
          <NextPieceContainer />
          {/* <TotalScoreBtn count = {this.props.tallyScore} /> */}
        </div>
        <div id="boardContainer">
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
