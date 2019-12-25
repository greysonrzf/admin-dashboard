"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Async = _interopRequireDefault(require("react-select/lib/Async"));

var _apiClient = _interopRequireDefault(require("../../../utils/api-client"));

var _propertyInFilter = _interopRequireDefault(require("../../ui/property-in-filter"));

var _selectStyles = require("../../../styles/select-styles");

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Filter extends _react.default.PureComponent {
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
    onChange(property.name, selected ? selected.value : '');
  }

  async loadOptions(inputValue) {
    this.api = new _apiClient.default();
    const {
      property
    } = this.props;
    const records = await this.api.searchRecords({
      resourceId: property.reference,
      query: inputValue
    });
    this.options = records.map(r => ({
      value: r.id,
      label: r.title
    }));
    return this.options;
  }

  render() {
    const {
      property,
      filter
    } = this.props;
    const value = typeof filter[property.name] === 'undefined' ? '' : filter[property.name];
    const selected = (this.options || []).find(o => o.value === value);
    return _react.default.createElement(_propertyInFilter.default, {
      property: property
    }, _react.default.createElement(_Async.default, {
      value: typeof selected === 'undefined' ? '' : selected,
      isClearable: true,
      cacheOptions: true,
      styles: _selectStyles.filterStyles,
      loadOptions: this.loadOptions,
      onChange: this.handleChange,
      defaultOptions: true
    }));
  }

}

exports.default = Filter;
Filter.propTypes = {
  property: _types.propertyType.isRequired,
  onChange: _propTypes.default.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  filter: _propTypes.default.object
};
Filter.defaultProps = {
  filter: {}
};