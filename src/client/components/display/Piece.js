import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Square from "./Square";
import { DragSource, DropTarget } from "react-dnd";

const mapStateToProps = store => ({
  store
});

const Types = {
  ITEM: "piece"
};

const itemSource = {
  beginDrag(props) {
    const item = { id: props.id };
    console.log(props);
    return item;
  },
  endDrag(props, monitor) {
    const drag = monitor.getItem();
    const drop = monitor.getDropResult();

    const coord = monitor.getInitialSourceClientOffset();
    console.log(monitor, drag, coord);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const mapDispatchToProps = dispatch => ({});

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = { rotate: 0 };
    this.rotateHandler = this.rotateHandler.bind(this);
  }

  componentDidMount() {}

  rotateHandler() {
    let circ = this.state.rotate + 90;
    this.setState({ rotate: circ });
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div
        className="piece"
        onClick={this.rotateHandler}
        style={{ transform: `rotate(${this.state.rotate}deg)` }}
      >
        PIECE
      </div>
    );
  }
}

Piece = DragSource(Types.ITEM, itemSource, collect)(Piece);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);
