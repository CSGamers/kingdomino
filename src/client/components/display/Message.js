import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  message: store.game.message
});

const mapDispatchToProps = dispatch => ({});

class Message extends Component {
  constructor(props) {
    super(props);

  }

  render() {

      return (
      <div className="message">
        <h2 className="zoomIn">{this.props.message}</h2>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);