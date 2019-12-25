"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _viewHelpers = _interopRequireDefault(require("../../../backend/utils/view-helpers"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _topbar = _interopRequireDefault(require("./topbar"));

var _types = require("../../types");

var _routes = require("../routes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlobalStyle = _styledComponents.createGlobalStyle`
  html, body, #app {
      width: 100%;
      height: 100%;
  }

  a {
    color: ${({
  theme
}) => theme.colors.primary};
  }
`;

const ApplicationWrapper = _styledComponents.default.section.withConfig({
  displayName: "application__ApplicationWrapper",
  componentId: "sc-5s7xyz-0"
})(["font-size:14px;font-family:'Roboto',sans-serif;display:flex;flex-direction:row;height:100%;"]);

const Core = _styledComponents.default.section.withConfig({
  displayName: "application__Core",
  componentId: "sc-5s7xyz-1"
})(["height:100%;overflow-y:auto;width:100%;background:", ";display:flex;flex-direction:column;"], ({
  theme
}) => theme.colors.bck);

const App = props => {
  const {
    paths
  } = props;
  const h = new _viewHelpers.default({
    options: paths
  });
  const resourceId = ':resourceId';
  const actionName = ':actionName';
  const recordId = ':recordId';
  const recordActionUrl = h.recordActionUrl({
    resourceId,
    recordId,
    actionName
  });
  const resourceActionUrl = h.resourceActionUrl({
    resourceId,
    actionName
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(GlobalStyle, null), _react.default.createElement(ApplicationWrapper, null, _react.default.createElement(_sidebar.default, null), _react.default.createElement(Core, null, _react.default.createElement(_topbar.default, null), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: h.dashboardUrl(),
    exact: true,
    component: _routes.Dashboard
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: resourceActionUrl,
    exact: true,
    component: _routes.ResourceAction
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: recordActionUrl,
    exact: true,
    component: _routes.RecordAction
  })))));
};

App.propTypes = {
  paths: _types.pathsType.isRequired
};

const mapStateToProps = state => ({
  paths: state.paths
});

var _default = (0, _reactRedux.connect)(mapStateToProps)(App);

exports.default = _default;