import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToPros = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps)
  // console.log(state.streams[ownProps.match.params.id]);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToPros,
  { fetchStream }
)(StreamEdit);
