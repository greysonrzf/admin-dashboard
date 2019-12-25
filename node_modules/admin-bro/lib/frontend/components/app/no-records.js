"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _viewHelpers = _interopRequireDefault(require("../../../backend/utils/view-helpers"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoRecords = props => {
  const {
    resource
  } = props;
  const canCreate = resource.resourceActions.find(a => a.name === 'new');
  const h = new _viewHelpers.default();
  const newAction = h.resourceActionUrl({
    resourceId: resource.id,
    actionName: 'new'
  });
  return _react.default.createElement("div", {
    className: "content has-text-centered"
  }, _react.default.createElement("h3", null, "No records"), _react.default.createElement("p", null, "There are no records in this resource.", canCreate ? _react.default.createElement(_react.default.Fragment, null, "Create", ' ', _react.default.createElement(_reactRouterDom.Link, {
    to: newAction
  }, "first record")) : ''));
};

NoRecords.propTypes = {
  resource: _types.resourceType.isRequired
};
var _default = NoRecords;
exports.default = _default;