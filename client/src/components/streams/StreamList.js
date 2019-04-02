import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <div className="right floated content">
            <button className="ui button primary">EDIT</button>
            <button className="ui button negative">DELETE</button>
          </div>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description} </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <React.Fragment>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: 'right' }}>
          <Link to="/Streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToPros = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToPros,
  { fetchStreams }
)(StreamList);
