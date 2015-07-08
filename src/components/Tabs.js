import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import themeable from 'react-themeable';
import defaultTheme from '../defaultTheme';

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  selectTab(selectedIndex) {
    this.setState({
      active: selectedIndex
    });
  }

  render() {
    const theme = themeable(this.props.theme || defaultTheme);

    let children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    const headings = this.props.children.map((child, index) =>{

      return (
        <li
          {...theme(index, 'Tab-li', this.state.active === index  && 'Tab-li-active')}
          onClick={this.selectTab.bind(this, index)}
        >
          {child.props.heading}
        </li>
      );
    });

    return (
      <div>
        <ul {...theme(1, 'Tabs', this.props.alignRight && 'Tabs--alignRight', this.props.alignLeft && 'Tabs--alignLeft')}>
          {headings}
        </ul>
        {this.props.children[this.state.active]}
      </div>
    );
  }
}

Tabs.propTypes = {
  active: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  alignRight: PropTypes.bool,
  alignLeft: PropTypes.bool
};

Tabs.defaultProps = {
  active: 0
};

export default Tabs;
