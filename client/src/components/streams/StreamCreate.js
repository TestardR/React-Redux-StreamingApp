import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <h2>Stream Create</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  { createStream }
)(StreamCreate);
