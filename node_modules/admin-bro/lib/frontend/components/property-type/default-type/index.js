"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _show = _interopRequireDefault(require("./show"));

var _edit = _interopRequireDefault(require("./edit"));

var _filter = _interopRequireDefault(require("./filter"));

var _list = _interopRequireDefault(require("./list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  show: _show.default,
  edit: _edit.default,
  filter: _filter.default,
  list: _list.default
};
exports.default = _default;