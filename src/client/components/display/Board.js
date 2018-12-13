import React, { Component } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { DropTarget } from "react-dnd";


const mapStateToProps = store => ({
  boards: store.game.boards
});

const mapDispatchToProps = dispatch => ({
  placePiece: (target) => {
    dispatch(actions.placePiece(target));
  }
});

const Types = {
  PIECE: "piece"
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

const boardSquareTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }

    // Obtain the dragged item and coordinates to where to be dropped
    const item = monitor.getItem();
    console.log('item', item)
    let coord = monitor.getClientOffset();
    let target = document.elementFromPoint(coord.x, coord.y).id;
    console.log(target);
    props.placePiece(target);
    // console.log(
    //   "THIS IS TARGET ELEMENT? ",
    //   document.elementFromPoint(coord.x, coord.y)
    // );
    return { moved: true, coord: coord, item: item };
  }
};

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
    // console.log("canDrop", canDrop);
    // console.log("contents", this.props.contents);
    let squares = [];
    for (let i = 0; i < 49; i++) {
      squares.push(<Square id={this.props.id + '-' + i} key={i} contents={this.props.contents[i]} />);
    }
    return connectDropTarget(
      <div className="boardBox">
        <h2>{`Player ${this.props.id.charAt(5)}`}</h2>
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
