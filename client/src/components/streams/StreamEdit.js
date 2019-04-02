import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    // console.log(this.props.stream.title);
    return (
      <React.Fragment>
        <h2>Stream Edit</h2>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </React.Fragment>
    );
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
  { fetchStream, editStream }
)(StreamEdit);
