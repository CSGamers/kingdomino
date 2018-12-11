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
    return connectDropTarget(
      <div className="square" id={this.props.id} key={this.props.key} />
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Square);
export default DropTarget(Types.ITEM, {}, collect)(Square);
