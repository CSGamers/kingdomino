import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Square from "./Square";
import DOMINOS from "../../DOMINOS.json";

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({
  changeOrientation: () => {
    dispatch(actions.changeOrientation());
  },
});



class NextPiece extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      order: [0, 1],
      style: {
        width: '102px',
        height: '52px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'space-between',
        backgroundColor: 'aquamarine',
        border: '1px solid black',
    } };

  }

  componentDidMount() {}

  render() {

    function rotateHandler() {
      let width, height, flexDirection, order;
      this.state.style.width === '102px' ? width = '52px' : width = '102px';
      this.state.style.height === '102px' ? height = '52px' : height = '102px';
      this.state.style.flexDirection === 'column' ? order = [this.state.order[1], this.state.order[0]] : order = this.state.order;
      this.state.style.flexDirection === 'row' ? flexDirection = 'column' : flexDirection = 'row';
      this.props.changeOrientation();
      this.setState({ style: { height, width, flexDirection }, order });
    }

      return (
      <div className="piece" style={this.state.style} onClick={rotateHandler.bind(this)}>
        <Square
          id={this.props.contents[0]}
          contents={DOMINOS[this.props.contents[this.state.order[0]]]}
        />
        <Square
          id={this.props.contents[1]}
          contents={DOMINOS[this.props.contents[this.state.order[1]]]}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPiece);