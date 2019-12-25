"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("../../../types");

var _sidebarBranding = _interopRequireDefault(require("./sidebar-branding"));

var _sidebarParent = _interopRequireDefault(require("./sidebar-parent"));

var _sidebarFooter = _interopRequireDefault(require("./sidebar-footer"));

var _groupResources = _interopRequireDefault(require("./group-resources"));

var _hamburger = _interopRequireDefault(require("./hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SidebarWrapper = _styledComponents.default.aside.withConfig({
  displayName: "sidebar__SidebarWrapper",
  componentId: "ah0hhb-0"
})(["display:flex;flex-shrink:0;flex-direction:column;justify-content:space-between;height:100%;overflow-y:auto;overflow-x:hidden;border-right:1px solid ", ";width:", ";transition:width 0.5s;& > section{padding:", ";width:", ";transition:padding 0.5s;& > section{opacity:1;transition:opacity 0.5s;}}&.hidden{width:50px;transition:width 0.5s;overflow:hidden;& > section{padding:", " 4px;transition:padding 0.5s;& > section{opacity:0;transition:opacity 0.5s;}}}"], ({
  theme
}) => theme.colors.border, ({
  theme
}) => theme.sizes.sidebarWidth, ({
  theme
}) => `${theme.sizes.padding} ${theme.sizes.paddingLayout} ${theme.sizes.paddingLayout}`, ({
  theme
}) => theme.sizes.sidebarWidth, ({
  theme
}) => theme.sizes.padding);

const SidebarLabel = _styledComponents.default.h2.withConfig({
  displayName: "sidebar__SidebarLabel",
  componentId: "ah0hhb-1"
})(["margin-top:", ";margin-left:", ";margin-bottom:", ";color:", ";font-size:", ";text-transform:uppercase;letter-spacing:.1em;"], ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.fonts.min);

const Sidebar = props => {
  const {
    branding,
    paths,
    resources
  } = props;
  const [hidden, setHidden] = (0, _react.useState)(false);
  return _react.default.createElement(SidebarWrapper, {
    className: hidden ? 'hidden' : 'active'
  }, _react.default.createElement("section", null, _react.default.createElement(_hamburger.default, {
    onClick: () => setHidden(!hidden)
  }), _react.default.createElement("section", null, _react.default.createElement(_sidebarBranding.default, {
    branding: branding,
    paths: paths
  }), _react.default.createElement(SidebarLabel, null, "Navigation"), _react.default.createElement("ul", null, (0, _groupResources.default)(resources).map(parent => _react.default.createElement(_sidebarParent.default, {
    parent: parent,
    key: parent.name
  }))))), branding.softwareBrothers && _react.default.createElement(_sidebarFooter.default, {
    hidden: hidden
  }));
};

Sidebar.propTypes = {
  paths: _types.pathsType.isRequired,
  branding: _types.brandingType.isRequired,
  resources: _propTypes.default.arrayOf(_types.resourceType).isRequired
};

const mapStateToProps = state => ({
  resources: state.resources,
  branding: state.branding,
  paths: state.paths,
  versionsType: state.versionsType
});

var _default = (0, _reactRedux.connect)(mapStateToProps)(Sidebar);

exports.default = _default;