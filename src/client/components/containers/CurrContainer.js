import React, { Component } from "react";
import Piece from "../display/Piece";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({});

class CurrContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="curr">
        <h2>Current Pieces</h2>
        <Piece contents={["30a", "30b"]} id="P30" />
        <Piece contents={["31a", "31b"]} id="P31" />
        <Piece contents={["32a", "32b"]} id="P32" />
        <Piece contents={["33a", "33b"]} id="P33" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrContainer);
