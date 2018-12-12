import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import QueuePieceBtn from "../display/QueuePieceBtn";
import * as actions from "../../actions/actions";



const mapStateToProps = store => ({
  currPieces: store.game.currPieces
});

const mapDispatchToProps = dispatch => ({
  queuePiece: () => {
    dispatch(actions.queuePiece());
  },
});

class CurrContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const curr4 = this.props.currPieces.map(num => {
      return <Piece contents={[`${num}a`, `${num}b`]} id={`P${num}`} key={`P${num}`} /> 
    })

    return (
      <div className="currContainer">
        <h2>Current Pieces</h2>
        {curr4}
        <QueuePieceBtn queuePiece={this.props.queuePiece} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrContainer);
