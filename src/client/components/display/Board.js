import React, { Component } from "react";
import Square from "./Square";
// import { connect } from "react-redux";
// import * as actions from "../../actions/actions";

// const mapStateToProps = store => ({
//   store
// });

// const mapDispatchToProps = dispatch => ({});

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let squares = [];
    for (let i = 0; i < 49; i++) {
      squares.push(<Square id={i} key={i} />);
    }
    return <div className="board">{squares}</div>;
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Board);
