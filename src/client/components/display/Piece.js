import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Square from "./Square";
import DOMINOS from "../../DOMINOS.json";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({});

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      let id = this.props.contents[0].split('');
      id.pop();
      id = id.join('')
      return (
      <div className="piece" id={id}>
        <Square
          id={this.props.contents[0]}
          contents={DOMINOS[this.props.contents[0]]}
        />
        <Square
          id={this.props.contents[1]}
          contents={DOMINOS[this.props.contents[1]]}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);
