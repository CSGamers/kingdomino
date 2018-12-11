import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import Piece from "../display/Piece";

const mapStateToProps = store => ({
  store
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
      squares.push(<Square id={i} key={i} />);
    }
    return (
      <div className="board">
        {squares}
        <Piece contents={["1a", "1b"]} id="P1" />
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Board);
export default DragDropContext(HTML5Backend)(Board);
