"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Async = _interopRequireDefault(require("react-select/lib/Async"));

var _apiClient = _interopRequireDefault(require("../../../utils/api-client"));

var _propertyInEdit = _interopRequireDefault(require("../../ui/property-in-edit"));

var _selectStyles = _interopRequireDefault(require("../../../styles/select-styles"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Edit extends _react.default.Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selected) {
    const {
      onChange,
      property
    } = this.props;
    this.selected = selected.record;
    onChange(property.name, selected.value, selected.record);
  }

  async loadOptions(inputValue) {
    const {
      property
    } = this.props;
    const api = new _apiClient.default();
    const records = await api.searchRecords({
      resourceId: property.reference,
      query: inputValue
    });
    return records.map(record => ({
      value: record.id,
      label: record.title,
      record
    }));
  }

  render() {
    const {
      property,
      record
    } = this.props;
    const error = record.errors && record.errors[property.name];
    const reference = record.populated && record.populated[property.name];
    let selectedOption = reference && {
      value: reference.id,
      label: reference.title
    };

    if (this.selected) {
      selectedOption = {
        value: this.selected.id,
        label: this.selected.title
      };
    }

    return _react.default.createElement(_propertyInEdit.default, {
      property: property,
      error: error
    }, _react.default.createElement(_Async.default, {
      cacheOptions: true,
      value: selectedOption,
      styles: _selectStyles.default,
      defaultOptions: true,
      loadOptions: this.loadOptions,
      onChange: this.handleChange
    }));
  }

}

exports.default = Edit;
Edit.propTypes = {
  property: _types.simplifiedPropertyType.isRequired,
  record: _types.recordType.isRequired,
  onChange: _propTypes.default.func.isRequired
};