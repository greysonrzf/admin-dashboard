"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _types = require("../../types");

var _withNotice = _interopRequireDefault(require("../../store/with-notice"));

var _recordsTable = _interopRequireDefault(require("../app/records-table"));

var _paginate = _interopRequireDefault(require("../ui/paginate"));

var _loader = _interopRequireDefault(require("../ui/loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name NewAction
 * @category Actions
 * @description Shows form for creating a given record.
 * @component
 * @private
 */
class List extends _react.default.Component {
  constructor(props) {
    super(props);
    this.api = new _apiClient.default();
    this.handleActionPerformed = this.handleActionPerformed.bind(this);
    this.state = {
      records: [],
      page: 1,
      perPage: 20,
      total: 0,
      loading: true,
      direction: 'asc',
      sortBy: null
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  componentDidUpdate(prevProps) {
    const {
      resource,
      location
    } = this.props;

    if (resource.id !== prevProps.resource.id || location.search !== prevProps.location.search) {
      this._fetchData();
    }
  }

  _fetchData() {
    const {
      location,
      resource
    } = this.props;
    const api = new _apiClient.default();
    this.setState({
      loading: true
    });
    const query = new URLSearchParams(location.search);
    api.resourceAction({
      actionName: 'list',
      resourceId: resource.id,
      params: query
    }).then(response => {
      this.setState({
        records: response.data.records,
        page: response.data.meta.page,
        perPage: response.data.meta.perPage,
        total: response.data.meta.total,
        direction: response.data.meta.direction,
        sortBy: response.data.meta.sortBy,
        loading: false
      });
    });
  }

  handleActionPerformed() {
    this._fetchData();
  }

  render() {
    const {
      resource
    } = this.props;
    const {
      records,
      page,
      perPage,
      total,
      loading,
      direction,
      sortBy
    } = this.state;
    return _react.default.createElement(_wrapperBox.default, {
      border: true
    }, loading ? _react.default.createElement(_loader.default, null) : _react.default.createElement(_recordsTable.default, {
      resource: resource,
      records: records,
      actionPerformed: this.handleActionPerformed,
      direction: direction,
      sortBy: sortBy
    }), _react.default.createElement(_paginate.default, {
      page: page,
      perPage: perPage,
      total: total
    }));
  }

}

List.propTypes = {
  /**
   * Object of type: {@link BaseResource~JSON}
   */
  resource: _types.resourceType.isRequired,
  location: _types.locationType.isRequired
};

var _default = (0, _withNotice.default)((0, _reactRouterDom.withRouter)(List));

exports.default = _default;