import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { DropTarget } from "react-dnd";

const Types = {
  ITEM: "piece"
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}
import Crown from "./Crown";

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
    const { connectDropTarget } = this.props;

    let styles = {
      backgroundColor: this.props.contents.color
    };
    let crowns = [];

    if (this.props.contents.crowns) {
      for (let i = 0; i < this.props.contents.crowns; i++) {
        crowns.push(<Crown key={i} />);
      }
    }

    // return connectDropTarget(
    return (
      <div
        className="square"
        id={this.props.id}
        key={this.props.key}
        style={styles}
      >
        {crowns}
      </div>
    );
  }
}

// Square = DropTarget(Types.ITEM, {}, collect)(Square);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
