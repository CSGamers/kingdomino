import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { Stream } from "stream";

const mapStateToProps = store => ({
  board: store.game.board,
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
      squares.push(<Square id={i} key={i} contents={this.props.board[i]} />);
    }
    return <div className="board">{squares}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
