"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _styledButton = _interopRequireDefault(require("../ui/styled-button"));

var _types = require("../../types");

var _withNotice = _interopRequireDefault(require("../../store/with-notice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name NewAction
 * @category Actions
 * @description Shows form for creating a given record.
 * @component
 * @private
 */
class New extends _react.default.Component {
  constructor(props) {
    super(props);
    const {
      record
    } = props;
    this.api = new _apiClient.default();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      record: {
        params: record && record.params || {},
        errors: record && record.errors || {},
        populated: record && record.populated || {}
      }
    };
  }

  handleChange(propertyOrRecord, value) {
    if (typeof value === 'undefined' && propertyOrRecord.params) {
      this.setState({
        record: propertyOrRecord
      });
    } else {
      this.setState(state => ({
        record: { ...state.record,
          params: { ...state.record.params,
            [propertyOrRecord]: value
          }
        }
      }));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      resource,
      history,
      addNotice
    } = this.props;
    const {
      record
    } = this.state;
    const {
      params
    } = record;
    this.api.resourceAction({
      resourceId: resource.id,
      actionName: 'new',
      payload: {
        record: params
      }
    }).then(response => {
      if (response.data.redirectUrl) {
        addNotice({
          message: 'Record has been successfully created!'
        });
        history.push(response.data.redirectUrl);
      } else {
        addNotice({
          type: 'error',
          message: 'There were errors in the record object. Check them out'
        });
        this.setState(state => ({
          record: { ...state.record,
            errors: response.data.record.errors
          }
        }));
      }
    });
    return false;
  }

  render() {
    const {
      resource
    } = this.props;
    const properties = resource.editProperties;
    const {
      record
    } = this.state;
    return _react.default.createElement(_wrapperBox.default, {
      border: true
    }, _react.default.createElement("form", {
      onSubmit: this.handleSubmit.bind(this)
    }, properties.map(property => _react.default.createElement(_propertyType.default, {
      key: property.name,
      where: "edit",
      property: property,
      resource: resource,
      onChange: this.handleChange,
      record: record
    })), _react.default.createElement(_styledButton.default, {
      as: "button",
      type: "submit",
      className: "is-primary"
    }, _react.default.createElement("i", {
      className: "icomoon-save"
    }), _react.default.createElement("span", {
      className: "btn-text"
    }, "Save"))));
  }

}

New.propTypes = {
  /**
   * Object of type: {@link BaseResource~JSON}
   */
  resource: _types.resourceType.isRequired,

  /**
   * history object used by ReactRouter
   */
  history: _types.historyType.isRequired,

  /**
   * Object of type: {@link BaseRecord~JSON}
   */
  record: _types.recordType,

  /**
   * Function which adds a new `notice` information.
   */
  addNotice: _propTypes.default.func.isRequired
};
New.defaultProps = {
  record: null
};

var _default = (0, _withNotice.default)((0, _reactRouterDom.withRouter)(New));

exports.default = _default;