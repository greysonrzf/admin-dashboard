"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _viewHelpers = _interopRequireDefault(require("../../../../backend/utils/view-helpers"));

var _propertyInShow = _interopRequireDefault(require("../../ui/property-in-show"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Show extends _react.default.PureComponent {
  valueElement() {
    const h = new _viewHelpers.default();
    const {
      property,
      record,
      resource
    } = this.props;
    const refId = record.params[property.name];
    const populated = record.populated[property.name];
    const value = populated && populated.title || refId;

    if (resource.recordActions.find(a => a.name === 'show') && populated) {
      const href = h.recordActionUrl({
        resourceId: property.reference,
        recordId: refId,
        actionName: 'show'
      });
      return _react.default.createElement(_reactRouterDom.Link, {
        to: href
      }, value);
    }

    return _react.default.createElement("span", null, value);
  }

  render() {
    const {
      property
    } = this.props;
    return _react.default.createElement(_propertyInShow.default, {
      property: property
    }, this.valueElement());
  }

}

exports.default = Show;
Show.propTypes = {
  property: _types.propertyType.isRequired,
  record: _types.recordType.isRequired,
  resource: _types.resourceType.isRequired
};