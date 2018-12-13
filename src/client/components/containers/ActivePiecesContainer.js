import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CurrContainer from './CurrContainer';
import NextContainer from './NextContainer';
import Message from "../display/Message";

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class ActivePiecesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="activePiecesContainer">
        <CurrContainer />
        <NextContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivePiecesContainer);