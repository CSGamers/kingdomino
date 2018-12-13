import React, { Component } from 'react';
import Board from '../display/Board';
import Piece from '../display/Piece';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CurrContainer from '../containers/CurrContainer';
import NextContainer from '../containers/NextContainer';
import NextPieceContainer from './NextPieceContainer';
import LandingPage from './LandingPage';

const mapStateToProps = store => ({
  boards: store.game.boards,
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
    console.log('boards', this.props.boards);
    return (
      <div id='app'>
        {this.props.isAuthenticated === false ?
          <LandingPage /> :
          <div>
            <Board id={1} contents={this.props.boards.board1} />
            <div className='controls'>
              <CurrContainer />
              <NextContainer />
              <NextPieceContainer />
            </div>
            <Board id={2} contents={this.props.boards.board2} />
          </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
