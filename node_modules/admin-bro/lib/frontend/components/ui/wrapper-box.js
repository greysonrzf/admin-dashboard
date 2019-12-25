"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledWrapperBox = _styledComponents.default.section.withConfig({
  displayName: "wrapper-box__StyledWrapperBox",
  componentId: "liehve-0"
})(["padding:", ";flex-grow:1;border:", ";background:", ";& > h1{font-size:22px;margin-top:", ";margin-bottom:", ";}"], ({
  theme
}) => theme.sizes.paddingLayout, props => props.border ? `1px solid ${({
  theme
}) => theme.colors.border}` : 'none', props => props.border ? '#ffffff' : 'transparent', ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.sizes.padding);
/**
 * @classdesc
 * Basic layout element which controls padding.
 *
 * @component
 * @hideconstructor
 * @example
 * return (
 *   <WrapperBox border>
 *     <h1>Header</h1>
 *     <p>Some inside content</p>
 *   </WrapperBox>
 * )
 */


const WrapperBox = props => _react.default.createElement(StyledWrapperBox, props);

WrapperBox.propTypes = {
  /**
   * If wrapper should have a border.
   */
  border: _propTypes.default.bool
};
WrapperBox.defaultProps = {
  border: false
};
var _default = WrapperBox;
exports.default = _default;