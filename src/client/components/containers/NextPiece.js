import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import Next4Btn from '../display/Next4Btn';
import * as actions from "../../actions/actions";



const mapStateToProps = store => ({
  currentPlayer: store.game.currPlayer,
  currPieces: store.game.currPieces,
  pieceToPlay: store.game.pieceToPlay
});

const mapDispatchToProps = dispatch => ({
  // populateCurr: () => {
  //   dispatch(actions.populateCurr());
  // },
  // populateNext: () => {
  //   dispatch(actions.populateNext());
  // }
});

class NextPiece extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let num = this.props.pieceToPlay;
    let piece;
    if (num>0) piece = <Piece contents={[`${num}a`, `${num}b`]} id={`P${num}`} key={`P${num}`} />

    return (
      <div>
        <h2>Piece to Play</h2>
        <h3>Player: {this.props.currentPlayer}</h3>
        {piece}


      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPiece);