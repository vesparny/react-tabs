'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Tabs = (function (_Component) {
  function Tabs(props) {
    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, props);
    this.state = {
      active: props.active
    };
  }

  _inherits(Tabs, _Component);

  _createClass(Tabs, [{
    key: 'selectTab',
    value: function selectTab(selectedIndex) {
      this.setState({
        active: selectedIndex
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var headings = this.props.children.map(function (child, index) {
        var classes = (0, _classnames2['default'])({
          'Tab-li': true,
          'active': _this.state.active === index
        });
        return _react2['default'].createElement(
          'li',
          {
            className: classes,
            key: index,
            onClick: _this.selectTab.bind(_this, index)
          },
          child.props.heading
        );
      });
      var modifierClasses = (0, _classnames2['default'])({
        'Tabs--alignRight': this.props.alignRight,
        'Tabs--alignLeft': this.props.alignLeft,
        'Tabs': true
      });

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'ul',
          { className: modifierClasses },
          headings
        ),
        this.props.children[this.state.active]
      );
    }
  }]);

  return Tabs;
})(_react.Component);

Tabs.propTypes = {
  active: _react.PropTypes.number
};

Tabs.defaultProps = {
  active: 0
};

exports['default'] = Tabs;
module.exports = exports['default'];