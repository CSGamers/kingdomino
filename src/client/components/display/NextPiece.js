import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Square from "./Square";
import DOMINOS from "../../DOMINOS.json";
import { DragSource } from "react-dnd";
import { findDOMNode } from "react-dom";

const Types = {
  PIECE: "piece"
};

const pieceSource = {
  beginDrag(props, monitor, component) {
    const piece = { id: props.id };
    return piece;
  },
  endDrag(props, monitor, component) {
    // console.log("Monitoring", monitor.getDropResult());
    // console.log("Hello", props);
    // console.log("Component", component);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({
  changeOrientation: () => {
    dispatch(actions.changeOrientation());
  }
});

class NextPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [0, 1],
      style: {
        width: "102px",
        height: "52px",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        justifyContent: "space-between",
        backgroundColor: "aquamarine",
        border: "1px solid black"
      }
    };
  }

  componentDidMount() {}

  render() {
    function rotateHandler() {
      let width, height, flexDirection, order, inverted;
      this.state.style.width === "102px" ? (width = "52px") : (width = "102px");
      this.state.style.height === "102px" ? (height = "52px"): (height = "102px");
      this.state.style.flexDirection === "column" ? (order = [this.state.order[1], this.state.order[0]]) : (order = this.state.order);
      this.state.style.flexDirection === "row" ? (flexDirection = "column") : (flexDirection = "row");
      this.props.changeOrientation();
      this.setState({ style: { height, width, flexDirection }, order});
    }
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div className="piece" style={this.state.style} onClick={rotateHandler.bind(this)} >
        <Square id={this.props.contents[0]} contents={DOMINOS[this.props.contents[this.state.order[0]]]} />
        <Square id={this.props.contents[1]} contents={DOMINOS[this.props.contents[this.state.order[1]]]} />
      </div>
    );
  }
}

NextPiece = DragSource(Types.PIECE, pieceSource, collect)(NextPiece);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPiece);
