"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breadcrumbs = _interopRequireDefault(require("../app/breadcrumbs"));

var _actionHeader = _interopRequireDefault(require("../app/action-header"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _notice = _interopRequireDefault(require("../app/notice"));

var _baseAction = _interopRequireDefault(require("../app/base-action"));

var _filter = _interopRequireDefault(require("../app/filter"));

var _types = require("../../types");

var _queryHasFilter = _interopRequireDefault(require("../../utils/query-has-filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const NoticeWrapper = _styledComponents.default.div.withConfig({
  displayName: "resource-action__NoticeWrapper",
  componentId: "sc-2qdil3-0"
})(["width:100%;position:relative;"]);

const ResourceAction = props => {
  const {
    resources,
    match,
    paths,
    location
  } = props;
  const {
    resourceId,
    actionName
  } = match.params;
  const resource = resources.find(r => r.id === resourceId);
  const action = resource.resourceActions.find(r => r.name === actionName);
  const [filterVisible, setFilerVisible] = (0, _react.useState)((0, _queryHasFilter.default)(location.search));
  return _react.default.createElement("div", null, _react.default.createElement(NoticeWrapper, null, _react.default.createElement(_notice.default, null)), _react.default.createElement(_wrapperBox.default, null, _react.default.createElement(_breadcrumbs.default, {
    resource: resource,
    actionName: actionName
  }), _react.default.createElement(_actionHeader.default, {
    resource: resource,
    action: action,
    toggleFilter: action.showFilter ? () => setFilerVisible(!filterVisible) : undefined
  }), _react.default.createElement(_baseAction.default, {
    action: action,
    resource: resource,
    paths: paths
  })), action.showFilter ? _react.default.createElement(_filter.default, {
    resource: resource,
    isVisible: filterVisible,
    toggleFilter: () => setFilerVisible(!filterVisible)
  }) : '');
};

const mapStateToProps = state => ({
  paths: state.paths,
  resources: state.resources
});

ResourceAction.propTypes = {
  resources: _propTypes.default.arrayOf(_types.resourceType).isRequired,
  match: _types.matchType.isRequired,
  paths: _types.pathsType.isRequired,
  location: _types.locationType.isRequired
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ResourceAction);

exports.default = _default;