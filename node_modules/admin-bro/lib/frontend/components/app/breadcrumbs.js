"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadcrumbsContainer = _styledComponents.default.nav.attrs({
  className: 'breadcrumb'
}).withConfig({
  displayName: "breadcrumbs__BreadcrumbsContainer",
  componentId: "sc-10zz2gc-0"
})(["&&&{margin:", ";font-size:", ";}"], ({
  theme
}) => `-${theme.sizes.padding} 0 ${theme.sizes.padding} -10px`, ({
  theme
}) => theme.fonts.base);

const BreadcrumbLink = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "breadcrumbs__BreadcrumbLink",
  componentId: "sc-10zz2gc-1"
})(["&&&{color:", ";&:hover{color:", ";}}"], ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.colors.primary);
/**
 * @private
 * @component
 * var recordAction = {
 *   actionType: 'record',
 *   icon: 'fas fa-edit',
 *   isVisible: true,
 *   label: 'Action',
 *   name: 'action'
 * };
 * props = {
 *   resource: {
 *     href: '/admin/xxxx',
 *     name: 'resource name',
 *     recordActions: [recordAction],
 *     resourceActions: [],
 *   },
 *   record: {
 *     id: 'some-record',
 *     name: 'some-name',
 *     params: {},
 *   },
 *   actionName: recordAction.name,
 * }
 */

class Breadcrumbs extends _react.default.PureComponent {
  renderResource() {
    const {
      resource,
      record
    } = this.props;
    return _react.default.createElement("li", null, _react.default.createElement(BreadcrumbLink, {
      to: resource.href,
      className: record && 'is-active'
    }, resource.name));
  }

  renderAction() {
    const {
      actionName,
      resource
    } = this.props;
    const action = resource.resourceActions.find(a => a.name === actionName) || resource.recordActions.find(a => a.name === actionName);

    if (actionName) {
      return _react.default.createElement("li", {
        className: "is-active"
      }, _react.default.createElement(BreadcrumbLink, {
        href: "#"
      }, action.label));
    }

    return null;
  }

  render() {
    return _react.default.createElement(BreadcrumbsContainer, null, _react.default.createElement("ul", null, this.renderResource(), this.renderAction()));
  }

}

Breadcrumbs.propTypes = {
  resource: _types.resourceType.isRequired,
  record: _types.recordType,
  actionName: _propTypes.default.string
};
Breadcrumbs.defaultProps = {
  record: null,
  actionName: null
};
var _default = Breadcrumbs;
exports.default = _default;