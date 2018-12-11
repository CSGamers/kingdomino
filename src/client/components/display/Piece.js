import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Square from './Square';


const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({

});

class Piece extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="piece">
        <Square id={this.props.contents[0]} />
        <Square id={this.props.contents[1]} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Piece);