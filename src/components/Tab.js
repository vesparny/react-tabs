import React, { Component, PropTypes } from 'react';  /* eslint no-unused-vars:0 */

class Tab extends Component {

  render() {
    return (
      <div className="Tabs-tabContent">
        <div className="Tabs-pane">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default Tab;
