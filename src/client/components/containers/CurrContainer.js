import React, { Component } from "react";
import Piece from "../display/Piece";

export default class CurrContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Current Pieces</h2>
        <Piece contents={["30a", "30b"]} id="P30" />
        <Piece contents={["31a", "31b"]} id="P31" />
        <Piece contents={["32a", "32b"]} id="P32" />
        <Piece contents={["33a", "33b"]} id="P33" />
      </div>
    );
  }
}