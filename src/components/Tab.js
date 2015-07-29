import React, { PropTypes } from 'react';

const Tab = React.createClass({
  propTypes: {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    style: PropTypes.object
  },

  render() {
    return (
      <div style={this.props.style.content}>
        <div style={this.props.style.pane}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Tab;
