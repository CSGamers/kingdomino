import React, { Component } from "react";
import NextPiece from "../display/NextPiece";
import { connect } from "react-redux";
import Next4Btn from '../display/Next4Btn';
import * as actions from "../../actions/actions";



const mapStateToProps = store => ({
  currentPlayer: store.game.currPlayer,
  currPieces: store.game.currPieces,
  pieceToPlay: store.game.pieceToPlay
});

const mapDispatchToProps = dispatch => ({

});

class NextPieceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let num = this.props.pieceToPlay.piece;
    let piece;
    if (num>0) piece = <NextPiece contents={[`${num}a`, `${num}b`]} id={`P${num}`} key={`P${num}`} />

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
)(NextPieceContainer);