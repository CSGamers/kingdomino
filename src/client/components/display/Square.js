import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { DropTarget } from "react-dnd";
import Crown from "./Crown";

const Types = {
  PIECE: "piece"
};

const squareTarget = {
  canDrop (props) {
    const {canMovePiece, position: {x, y}} = props
    return canMovePiece(x, y)
  },

  drop (props) {
    const {movePiece, position: {x, y}} = props
    movePiece(x, y)
  }
}

function collect (connect, monitor) {
  const info = {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }

  return info
}
  
const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({});

class Square extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {

    let styles = {
      backgroundColor: this.props.contents.color
    };
    let crowns = [];

    if (this.props.contents.crowns) {
      for (let i = 0; i < this.props.contents.crowns; i++) {
        crowns.push(<Crown key={i} />);
      }
    }

    return (
      <div className="square" id={this.props.id} key={this.props.key} style={styles} >
        {crowns}
      </div>
    );
  }
} 


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
