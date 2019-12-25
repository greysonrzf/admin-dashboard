"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _new = _interopRequireDefault(require("./new"));

var _edit = _interopRequireDefault(require("./edit"));

var _show = _interopRequireDefault(require("./show"));

var _list = _interopRequireDefault(require("./list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  new: _new.default,
  edit: _edit.default,
  show: _show.default,
  list: _list.default
};
exports.default = _default;