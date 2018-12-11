import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import Piece from "../display/Piece";

const mapStateToProps = store => ({
  board1: store.game.board1
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
        <div className="board">{squares}</div>
        <Piece contents={["44a", "44b"]} id="P1" />
      </div>
    );
  }
}

Board = DragDropContext(HTML5Backend)(Board);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
