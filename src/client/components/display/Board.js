import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { DropTarget } from "react-dnd";
import { findDOMNode } from "react-dom";

const Types = {
  PIECE: "piece"
};

const boardSquareTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }

    // Obtain the dragged item and coordinates to where to be dropped
    const item = monitor.getItem();
    let coord = monitor.getClientOffset();
    return { moved: true, coord: coord, item: item };
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

const mapStateToProps = store => ({
  boards: store.game.boards
});

const mapDispatchToProps = dispatch => ({});

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOver && this.props.isOver) {
      // You can use this as enter handler
    }

    if (prevProps.isOver && !this.props.isOver) {
      // You can use this as leave handler
    }

    if (prevProps.isOverCurrent && !this.props.isOverCurrent) {
      // You can be more specific and track enter/leave
      // shallowly, not including nested targets
    }
  }

  render() {
    const { position } = this.props;
    const { isOver, canDrop, connectDropTarget } = this.props;
    console.log("contents", this.props.contents);
    let squares = [];
    for (let i = 0; i < 49; i++) {
      squares.push(<Square id={i} key={i} contents={this.props.contents[i]} />);
    }
    return connectDropTarget(
      <div>
        <h2>{`Player ${this.props.id}`}</h2>
        <div className="board">{squares}</div>
      </div>
    );
  }
}
Board = DropTarget(Types.PIECE, boardSquareTarget, collect)(Board);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
