"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownTrigger = _styledComponents.default.div.attrs({
  className: 'dropdown-trigger'
}).withConfig({
  displayName: "dropdown__DropdownTrigger",
  componentId: "sc-1b36k39-0"
})(["padding:0px ", ";font-size:20px;line-height:20px;&:hover{background:#fff;}"], ({
  theme
}) => theme.sizes.padding);

const DropdownMenu = _styledComponents.default.div.attrs({
  className: 'dropdown-menu'
}).withConfig({
  displayName: "dropdown__DropdownMenu",
  componentId: "sc-1b36k39-1"
})(["& > .dropdown-content{border:0px none;border-radius:0px;box-shadow:0 6px 13px 0 rgba(69,70,85,0.13);}"]);
/**
 * @classdesc
 * Representation of a dropdown with buttons.

 * @component
 * @hideconstructor
 * @example
 * return (
 * <WrapperBox border>
 *   <Dropdown className="is-right is-hoverable">
 *     <StyledButton>Button 1</StyledButton>
 *     <StyledButton>Button 2</StyledButton>
 *   </Dropdown>
 * </WrapperBox>
 * )
 */


const Dropdown = props => {
  const {
    children
  } = props;
  let {
    className = ''
  } = props;
  className += ' dropdown';
  return _react.default.createElement("div", _extends({}, props, {
    className: className
  }), _react.default.createElement(DropdownTrigger, null, _react.default.createElement("i", {
    className: "icomoon-options"
  })), _react.default.createElement(DropdownMenu, null, _react.default.createElement("div", {
    className: "dropdown-content"
  }, children)));
};

Dropdown.propTypes = {
  children: _types.childrenType,
  className: _propTypes.default.string
};
Dropdown.defaultProps = {
  children: null,
  className: null
};
var _default = Dropdown;
exports.default = _default;