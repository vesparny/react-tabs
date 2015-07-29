import React, { PropTypes } from 'react';
import defaultStyle from '../style';

const Tabs = React.createClass({

  propTypes: {
    active: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    alignRight: PropTypes.bool,
    alignLeft: PropTypes.bool,
    style: PropTypes.object,
    onSelect: PropTypes.func
  },

  getDefaultProps() {
    return {
      active: 0,
      style: defaultStyle
    };
  },

  getInitialState() {
    return {
      active: this.props.active
    };
  },

  selectTab(ev, selectedIndex) {
    this.setState({
      active: selectedIndex
    });
    if (this.props.onSelect) {
      this.props.onSelect(ev, selectedIndex);
    }
  },

  onMouseLeave() {
    this.setState({
      hovered: false
    });
  },

  onMouseEnter(index) {
    this.setState({
      hovered: index
    });
  },

  render() {
    const { style } = this.props;
    let tabsStyle = style.tabs;
    if (this.props.alignLeft) {
      tabsStyle = {...tabsStyle, ...style.alignLeft};
    }
    if (this.props.alignRight){
      tabsStyle = {...tabsStyle, ...style.alignRight};
    }
    let children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    const headings = this.props.children.map((child, index) =>{
      let liStyle = this.state.active === index ?
        {...style.li, ...style.active} :
        style.li;
      liStyle = this.state.hovered === index ?
        {...liStyle, ...style.hover} :
        liStyle;
      return (
        <li
          role="tab"
          style={liStyle}
          key={index}
          onClick={(ev) => this.selectTab(ev, index)}
          onMouseEnter={() => this.onMouseEnter(index)}
          onMouseLeave={() => this.onMouseLeave()}
        >
          {child.props.heading}
        </li>
      );
    });

    return (

      <div>
        <ul style={tabsStyle} role="tablist">
          {headings}
        </ul>
        {
          React.cloneElement(this.props.children[this.state.active], {style})
        }
      </div>
    );
  }
});

export default Tabs;
