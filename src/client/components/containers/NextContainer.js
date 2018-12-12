import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({});

class NextContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="next">
        <h2>Next Pieces</h2>
        <Piece contents={["1a", "1b"]} id="P30" />
        <Piece contents={["7a", "7b"]} id="P31" />
        <Piece contents={["5a", "5b"]} id="P32" />
        <Piece contents={["10a", "10b"]} id="P33" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextContainer);
