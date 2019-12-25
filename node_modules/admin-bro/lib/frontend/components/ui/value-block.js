"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _variables = require("../../styles/variables");

var _wrapperBox = _interopRequireDefault(require("./wrapper-box"));

var _types = require("../../types");

var _label = _interopRequireDefault(require("./label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OverlayLink = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "value-block__OverlayLink",
  componentId: "v4br11-0"
})(["position:absolute;top:0;left:0;width:100%;height:100%;display:block;transition:border-width 0.2s;&:hover{transition:border-width 0.2s;border-bottom:5px solid ", ";}"], ({
  theme
}) => theme.colors.primary);

const Level = _styledComponents.default.div.attrs({
  className: 'level'
}).withConfig({
  displayName: "value-block__Level",
  componentId: "v4br11-1"
})(["color:", ";margin-top:8px;& .value{font-size:34px;}& .icon{font-size:34px;}"], props => props.color);
/**
 * @name ValueBlock
 * @classdesc
 * Simple Widget, which can be used in the dashboard
 * @hideconstructor
 * @component
 * @example
 * return (
 *   <WrapperBox><Columns>
 *     <Column><ValueBlock  icon="fa fa-bomb" value="5">
 *       Utils
 *     </ValueBlock></Column>
 *     <Column><ValueBlock  icon="fa fa-star" value="12" href="/api/resourceName">
 *       Are
 *     </ValueBlock></Column>
 *     <Column><ValueBlock  icon="fa fa-cog" value="5" color="red">
 *       Awesome
 *     </ValueBlock></Column>
 *   </Columns></WrapperBox>
 * )
 */


class ValueBlock extends _react.default.PureComponent {
  render() {
    const {
      icon,
      value,
      children,
      color,
      href,
      label
    } = this.props;
    return _react.default.createElement(_wrapperBox.default, {
      border: true,
      style: {
        position: 'relative'
      }
    }, href ? _react.default.createElement(OverlayLink, {
      to: href
    }) : '', label ? _react.default.createElement(_label.default, null, label) : '', _react.default.createElement(Level, {
      color: color
    }, _react.default.createElement("div", {
      className: "value"
    }, value), _react.default.createElement("div", {
      className: "icon"
    }, _react.default.createElement("i", {
      className: icon
    }))), children);
  }

}

exports.default = ValueBlock;
ValueBlock.propTypes = {
  /**
   * Icon class: i.e "fa fa-bomb"
   */
  icon: _propTypes.default.string,

  /**
   * Value string which
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Content inside a block
   */
  children: _types.childrenType,

  /**
   * Optional color
   */
  color: _propTypes.default.string,

  /**
   * Link url if the block should be clickable
   */
  href: _propTypes.default.string,

  /**
   * Label of the block
   */
  label: _propTypes.default.string
};
ValueBlock.defaultProps = {
  color: _variables.colors.primary,
  children: null,
  value: null,
  label: null,
  href: null,
  icon: null
};