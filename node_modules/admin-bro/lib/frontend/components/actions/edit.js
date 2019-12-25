"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _styledButton = _interopRequireDefault(require("../ui/styled-button"));

var _types = require("../../types");

var _apiClient = _interopRequireDefault(require("../../utils/api-client"));

var _withNotice = _interopRequireDefault(require("../../store/with-notice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name EditAction
 * @category Actions
 * @description Shows form for updating a given record.
 * @private
 * @component
 */
class Edit extends _react.default.Component {
  constructor(props) {
    super(props);
    const {
      record
    } = props;
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      record
    };
    this.api = new _apiClient.default();
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
    const {
      resource,
      history,
      addNotice
    } = this.props;
    const {
      record
    } = this.state;
    this.api.recordAction({
      resourceId: resource.id,
      actionName: 'edit',
      recordId: record.id,
      payload: {
        record: record.params
      }
    }).then(response => {
      if (response.data.redirectUrl) {
        history.push(response.data.redirectUrl);
        addNotice({
          message: 'Record has been successfully updated!'
        });
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
    event.preventDefault();
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
      onChange: this.handleChange,
      property: property,
      resource: resource,
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

Edit.propTypes = {
  /**
   * Object of type: {@link BaseResource~JSON}
   */
  resource: _types.resourceType.isRequired,

  /**
   * Object of type: {@link Action~JSON}
   */
  record: _types.recordType.isRequired,

  /**
   * history object used by ReactRouter
   */
  history: _types.historyType.isRequired,

  /**
   * Function which adds a new `notice` information.
   */
  addNotice: _propTypes.default.func.isRequired
};

var _default = (0, _withNotice.default)((0, _reactRouterDom.withRouter)(Edit));

exports.default = _default;