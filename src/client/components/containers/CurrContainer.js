import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import SkipBtn from "../display/SkipBtn";
import * as actions from "../../actions/actions";
import BeginBtn from '../display/BeginBtn'

const mapStateToProps = store => ({
  currPieces: store.game.currPieces,
  hasStarted: store.game.hasStarted
});

const mapDispatchToProps = dispatch => ({
  skipPiece: () => {
    dispatch(actions.skipPiece());
  }
});

class CurrContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const curr4 = this.props.currPieces.map(num => {
      return (
        <Piece
          contents={[`${num}a`, `${num}b`]}
          id={`P${num}`}
          key={`P${num}`}
        />
      );
    });

    let btn;
    this.props.hasStarted ? btn = <SkipBtn skipPiece={this.props.skipPiece} /> : btn = <BeginBtn skipPiece={this.props.skipPiece} />
    

    return (
      <div className="currContainer">
        <h2>Current Pieces</h2>
        <div className="pieces">
         {curr4}
        </div>
        {btn}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrContainer);
