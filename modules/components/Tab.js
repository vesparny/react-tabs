"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/* eslint no-unused-vars:0 */

var Tab = (function (_Component) {
  function Tab() {
    _classCallCheck(this, Tab);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(Tab, _Component);

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "Tabs-tabContent" },
        _react2["default"].createElement(
          "div",
          { className: "Tabs-pane" },
          this.props.children
        )
      );
    }
  }]);

  return Tab;
})(_react.Component);

Tab.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element]).isRequired
};

exports["default"] = Tab;
module.exports = exports["default"];