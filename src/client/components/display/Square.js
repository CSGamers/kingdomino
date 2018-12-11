import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

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
    return <div className="square" id={this.props.id} key={this.props.key} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
