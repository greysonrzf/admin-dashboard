"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledLabel = _styledComponents.default.label.attrs({
  className: 'label'
}).withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-1f1o2k1-0"
})(["&&&{display:block;text-transform:uppercase;font-size:", ";color:", ";font-weight:normal;margin:0 0 8px 0;letter-spacing:0.1em;}"], ({
  theme
}) => theme.fonts.min, ({
  theme
}) => theme.colors.lightText);
/**
 * @class
 * @classdesc
 * Represents labels inside the application.
 *
 * @hideconstructor
 * @component
 * @example
 * return (
 * <WrapperBox border>
 *   <Label>Some Label:</Label>
 *   <p>Text below the label</p>
 * </WrapperBox>
 * )
 */


const Label = props => _react.default.createElement(StyledLabel, props);

Label.propTypes = {
  children: _types.childrenType
};
Label.defaultProps = {
  children: null
};
var _default = Label;
exports.default = _default;