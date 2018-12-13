import React, { Component } from "react";
import NextPiece from "../display/NextPiece";
import { connect } from "react-redux";
import Next4Btn from "../display/Next4Btn";
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({
  currentPlayer: store.game.currPlayer,
  currPieces: store.game.currPieces,
  pieceToPlay: store.game.pieceToPlay
});

const mapDispatchToProps = dispatch => ({
  skipPiece: () => {
    dispatch(actions.skipPiece());
  }
});

class NextPieceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currPieces.length && this.props.pieceToPlay.piece == 0) this.props.skipPiece();
    let num = this.props.pieceToPlay.piece;
    let piece;
    let style = { display: 'none' }
    if (num > 0) {
      piece = ( <NextPiece contents={[`${num}a`, `${num}b`]} id={`P${num}`} key={`P${num}`} /> );
      style = {};
    }

    return (
      <div className = "nextPieceContainer">
        <i style={style}>click to rotate</i>
        {piece}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPieceContainer);
