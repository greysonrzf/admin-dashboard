"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledTable = _styledComponents.default.table.attrs({
  className: 'table is-fullwidth'
}).withConfig({
  displayName: "table__StyledTable",
  componentId: "sc-19n8ktm-0"
})(["& > thead > tr > th{border:none;}& tr.is-selected{background:", ";}td{color:", ";padding:", ";border-color:", ";}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.defaultText, ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.colors.border);
/**
 * @classdesc
 * Simple compnent for styling tables
 * @hideconstructor
 * @component
 * @example
 * return (
 * <WrapperBox border>
 *   <h1>Table Information</h1>
 *   <Table>
 *     <thead>
 *       <tr>
 *         <th><Label>Label1</Label></th>
 *         <th><Label>Label2</Label></th>
 *       </tr>
 *     </thead>
 *     <tbody>
 *       <tr>
 *         <td>Value1</td>
 *         <td>Value12</td>
 *       </tr>
 *       <tr>
 *         <td>Value1</td>
 *         <td>Value12</td>
 *       </tr>
 *     </tbody>
 *   </Table>
 * </WrapperBox>
 * )
 */


const Table = props => _react.default.createElement(StyledTable, props);

var _default = Table;
exports.default = _default;