"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Btn = (0, _styledComponents.default)(_reactRouterDom.Link).attrs(({
  primary
}) => ({
  className: `button${primary ? ' is-primary' : ''}`
})).withConfig({
  displayName: "styled-button__Btn",
  componentId: "vse0ck-0"
})(["&&&{font-size:", ";border-radius:0;border-color:", ";background:#fff;height:34px;padding:", ";color:", ";& i,& svg{margin-right:5px;}&:hover{border-color:", ";}&.is-white{background-color:#fff;border-color:transparent;color:", ";}&.is-primary{background-color:", ";color:#ffffff;&:hover{background-color:", ";}}&.is-text{background-color:transparent;color:", ";border:transparent;}&.in-dropdown{color:", ";font-size:", ";width:100%;text-align:start;justify-content:flex-start;height:40px;padding-left:40px;border:none;&:hover{border:4px ", ";padding-left:36px;border-style:none solid;}}}"], ({
  theme
}) => theme.fonts.medium, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => `${theme.sizes.paddingMin} ${theme.sizes.padding}`, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryHover, ({
  theme
}) => theme.colors.defaultText, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryHover, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.defaultText, ({
  theme
}) => theme.fonts.base, ({
  theme
}) => theme.colors.primary);
/**
 * @classdesc
 * Base button component
 *
 * @component
 * @hideconstructor
 *
 * @example
 * return (
 *   <Columns>
 *     <Column><StyledButton>Regular button</StyledButton></Column>
 *     <Column><StyledButton primary>Primary</StyledButton></Column>
 *     <Column><StyledButton><i class="fa fa-bomb" />With icon</StyledButton></Column>
 *   </Columns>
 * )
 */

const StyledButton = props => _react.default.createElement(Btn, props);

StyledButton.propTypes = {
  /**
   * If button should be presented as a primary action
   */
  primary: _propTypes.default.bool
};
StyledButton.defaultProps = {
  primary: undefined
};
var _default = StyledButton;
exports.default = _default;