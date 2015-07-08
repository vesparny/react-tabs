import React, { Component, PropTypes } from 'react';
import themeable from 'react-themeable';
import defaultTheme from '../defaultTheme';

class Tab extends Component {
  render() {
    const theme = themeable(this.props.theme || defaultTheme);

    return (
      <div {...theme(1, 'Tabs-tabContent')}>
        <div {...theme(2, 'Tabs-pane')}>
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
