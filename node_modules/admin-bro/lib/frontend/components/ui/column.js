"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledColumn = _styledComponents.default.section.attrs(({
  width = 4,
  offset = 0
}) => ({
  className: `column is-${width}-desktop is-offset-${offset}`
})).withConfig({
  displayName: "column__StyledColumn",
  componentId: "ulchx1-0"
})([""]);
/**
 * @classdesc
 * Colum representation in AdminBro grid. It uses [bulma](https://bulma.io/documentation/) grid.
 *
 * Example usage with {@link Column}
 * ```JavaScript
 * import { Column, Columns } from 'admin-bro/components'
 * //...
 * return (
 *   <columns>
 *      <column width={8}>
 *        Some content on the left
 *      </column>
 *      <column width={4}>
 *        Some content on the right
 *      </column>
 *   </columns>
 *  )
 * ```
 *
 * @hideconstructor
 * @see https://bulma.io/documentation/
 * @see {@link Columns}
 * @component
 *
 * @example <caption>Layout with text blocks by using column</caption>
 * return (
 *   <Columns>
 *     <Column width={2} offset={2}>
 *       <WrapperBox>Some wrapped text</WrapperBox>
 *     </Column>
 *     <Column width={3}>
 *     <WrapperBox border>Inside Border</WrapperBox>
 *     </Column>
 *     <Column width={5} style={{background: '#ccc'}}>normal text</Column>
 *   </Columns>
 * )
 */


const Column = props => _react.default.createElement(StyledColumn, props);

Column.propTypes = {
  /**
   * Width of the column in 12 column grid
   */
  width: _propTypes.default.number,

  /**
   * column offset
   */
  offset: _propTypes.default.number
};
Column.defaultProps = {
  width: 4,
  offset: 0
};
var _default = Column;
exports.default = _default;