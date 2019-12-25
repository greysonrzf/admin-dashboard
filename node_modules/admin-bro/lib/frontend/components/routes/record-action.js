"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breadcrumbs = _interopRequireDefault(require("../app/breadcrumbs"));

var _actionHeader = _interopRequireDefault(require("../app/action-header"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _loader = _interopRequireDefault(require("../ui/loader"));

var _notice = _interopRequireDefault(require("../app/notice"));

var _types = require("../../types");

var _baseAction = _interopRequireDefault(require("../app/base-action"));

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContainerRecord = _styledComponents.default.div.withConfig({
  displayName: "record-action__ContainerRecord",
  componentId: "sc-7mb0h9-0"
})(["display:flex;flex-direction:column;"]);

const NoticeWrapper = _styledComponents.default.div.withConfig({
  displayName: "record-action__NoticeWrapper",
  componentId: "sc-7mb0h9-1"
})(["width:100%;position:relative;"]);

class RecordAction extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: null,
      isLoading: true
    };
  }

  componentDidMount() {
    const {
      match
    } = this.props;
    this.fetchRecord(match.params);
  }

  shouldComponentUpdate(newProps) {
    const {
      match
    } = this.props;
    const {
      actionName,
      recordId,
      resourceId
    } = match.params;

    if (newProps.match.params.actionName !== actionName || newProps.match.params.recordId !== recordId || newProps.match.params.resourceId !== resourceId) {
      this.fetchRecord(newProps.match.params);
      return false;
    }

    return true;
  }

  getResourceAndAction(name = null) {
    const {
      match,
      resources
    } = this.props;
    const {
      resourceId,
      actionName
    } = match.params;
    const nameToCheck = name || actionName;
    const resource = resources.find(r => r.id === resourceId);
    const action = resource.recordActions.find(r => r.name === nameToCheck);
    return {
      resource,
      action
    };
  }

  fetchRecord({
    actionName,
    recordId,
    resourceId
  }) {
    const api = new _apiClient.default();
    this.setState({
      isLoading: true,
      record: null
    });
    api.recordAction({
      resourceId,
      recordId,
      actionName
    }).then(response => {
      this.setState({
        isLoading: false,
        record: response.data.record
      });
    });
  }

  render() {
    const {
      match,
      paths
    } = this.props;
    const {
      actionName,
      recordId
    } = match.params;
    const {
      record,
      isLoading
    } = this.state;
    const {
      resource,
      action
    } = this.getResourceAndAction();
    return _react.default.createElement(ContainerRecord, null, _react.default.createElement(NoticeWrapper, null, _react.default.createElement(_notice.default, null)), _react.default.createElement(_wrapperBox.default, null, _react.default.createElement(_breadcrumbs.default, {
      resource: resource,
      actionName: actionName
    }), _react.default.createElement(_actionHeader.default, {
      resource: resource,
      recordId: recordId,
      action: action
    }), isLoading ? _react.default.createElement(_loader.default, null) : _react.default.createElement(_baseAction.default, {
      action: action,
      resource: resource,
      record: record,
      paths: paths
    })));
  }

}

const mapStateToProps = state => ({
  paths: state.paths,
  resources: state.resources
});

RecordAction.propTypes = {
  resources: _propTypes.default.arrayOf(_types.resourceType).isRequired,
  match: _types.matchType.isRequired,
  paths: _types.pathsType.isRequired
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(RecordAction);

exports.default = _default;