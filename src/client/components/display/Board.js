import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({
  board: store.game.board
});

const mapDispatchToProps = dispatch => ({});

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let squares = [];
    for (let i = 0; i < 49; i++) {
      squares.push(<Square id={i} key={i} contents={this.props.board1[i]} />);
    }
    return (
      <div>
        <h2>{`Player ${this.props.id}`}</h2>
        <div className="board">{squares}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
