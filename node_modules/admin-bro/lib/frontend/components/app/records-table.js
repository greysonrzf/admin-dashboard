"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recordInList = _interopRequireDefault(require("./record-in-list"));

var _propertyHeader = _interopRequireDefault(require("./property-header"));

var _noRecords = _interopRequireDefault(require("./no-records"));

var _types = require("../../types");

var _table = _interopRequireDefault(require("../ui/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RecordsTable = props => {
  const {
    resource,
    records,
    actionPerformed,
    sortBy,
    direction
  } = props;

  if (!records.length) {
    return _react.default.createElement(_noRecords.default, {
      resource: resource
    });
  }

  return _react.default.createElement(_table.default, null, _react.default.createElement("thead", null, _react.default.createElement("tr", {
    key: "header"
  }, resource.listProperties.map(property => _react.default.createElement(_propertyHeader.default, {
    resource: resource,
    property: property,
    key: property.name,
    sortBy: sortBy,
    direction: direction
  })), _react.default.createElement("th", {
    key: "actions",
    style: {
      width: 80
    }
  }))), _react.default.createElement("tbody", null, records.map(record => _react.default.createElement(_recordInList.default, {
    record: record,
    resource: resource,
    key: record.id,
    actionPerformed: actionPerformed
  }))));
};

RecordsTable.propTypes = {
  resource: _types.resourceType.isRequired,
  records: _propTypes.default.arrayOf(_types.recordType).isRequired,
  actionPerformed: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.string.isRequired,
  direction: _propTypes.default.string.isRequired
};
var _default = RecordsTable;
exports.default = _default;