import React, { Component } from 'react';
import Board from '../display/Board';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import NextPieceContainer from './NextPieceContainer';
import LandingPage from './LandingPage';
import King from "../display/King";
import logo from '../../assets/img/kingdomino.png'
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import TotalScoreBtn from "../display/TotalScoreBtn";
import ActivePiecesContainer from "./ActivePiecesContainer";
import Message from "../display/Message";
import StartBtn from "../display/StartBtn";

const mapStateToProps = store => ({
  boards: store.game.boards,
  message: store.game.message,
  pieceToPlay: store.game.pieceToPlay,
  isAuthenticated: store.auth.isAuthenticated
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

function startGame() {
  this.props.populateNext();
  this.props.chooseStartingPlayer();
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.shufflePieces();
  }

  render() {
    console.log("boards", this.props.boards);

    let btn;
    console.log(this.props.message)
    if (this.props.message === 'Click Start to Begin') btn = <StartBtn start={ startGame.bind(this) }/>
    else btn = <TotalScoreBtn count={ this.props.tallyScore } />

    return (
      <div>
        {/* {this.props.isAuthenticated === false ?
          <LandingPage /> : */}
          <div id='app'>
            <div id="boardContainer">
              <Board id='board1' contents={this.props.boards.board1} />
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
              {btn}
            </div>
            <div id="boardContainer">
              <Board id='board2' contents={this.props.boards.board2}/>
              <div className="kingContainer">
                <King color="blue" />
                <King color="blue" />
              </div>
            </div>
          </div>
        {/* } */}
      </div>
    );
  }
}
App = DragDropContext(HTML5Backend)(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
