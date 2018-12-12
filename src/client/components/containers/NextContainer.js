import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";
import Next4Btn from "../display/Next4Btn";
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({
  nextPieces: store.game.nextPieces
});

const mapDispatchToProps = dispatch => ({
  populateCurr: () => {
    dispatch(actions.populateCurr());
  },
  populateNext: () => {
    dispatch(actions.populateNext());
  },
});

function dealPieces() {
  this.props.populateCurr();
  this.props.populateNext();
}

class NextContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const next4 = this.props.nextPieces.map(num => {
      return (
        <Piece
          contents={[`${num}a`, `${num}b`]}
          id={`P${num}`}
          key={`P${num}`}
        />
      );
    });

    return (
      <div className="nextContainer">
        <h2>Next Pieces</h2>
        {next4}
        <Next4Btn dealPieces={dealPieces.bind(this)} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextContainer);
