import React, { Component, PropTypes } from 'react';  /* eslint no-unused-vars:0 */
import classNames from 'classnames';

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
    let children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    const headings = this.props.children.map((child, index) =>{
      let classes = classNames({
        'Tab-li': true,
        'active': this.state.active === index
      });
      return (
        <li
          className={classes}
          key={index}
          onClick={this.selectTab.bind(this, index)}
        >
          {child.props.heading}
        </li>
      );
    });
    const modifierClasses = classNames({
      'Tabs--alignRight': this.props.alignRight,
      'Tabs--alignLeft': this.props.alignLeft,
      'Tabs': true
    });

    return (
      <div>
        <ul className={modifierClasses}>
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
