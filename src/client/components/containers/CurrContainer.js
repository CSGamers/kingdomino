import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import SkipBtn from "../display/SkipBtn";
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({
  currPieces: store.game.currPieces
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

    return (
      <div className="currContainer">
        <h2>Current Pieces</h2>
        <div className="pieces">
         {curr4}
        </div>
        <SkipBtn skipPiece={this.props.skipPiece} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrContainer);
