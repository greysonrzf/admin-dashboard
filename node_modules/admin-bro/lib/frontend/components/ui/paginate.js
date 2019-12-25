"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jwPaginate = _interopRequireDefault(require("jw-paginate"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _styledButton = _interopRequireDefault(require("./styled-button"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PaginationWrapper = _styledComponents.default.div.attrs({
  className: 'level-item pagination-content'
}).withConfig({
  displayName: "paginate__PaginationWrapper",
  componentId: "sc-1l5c7er-0"
})(["& > .pagination{border:1px solid ", ";padding:4px;}"], ({
  theme
}) => theme.colors.border);
/**
 * @classdesc
 * Component which renders pagination
 * @hideconstructor
 *
 * @component
 * @example
 * const location = { search: ''}
 * return (
 *   <Paginate total={100} page={4} perPage={10} location={location} />
 * )
 */


class Paginate extends _react.default.PureComponent {
  linkToPage(page) {
    const {
      location
    } = this.props;
    const search = new URLSearchParams(location.search);
    search.set('page', page);
    return search.toString();
  }

  render() {
    const {
      total,
      page,
      perPage
    } = this.props;
    const currentPage = parseInt(page || 1, 10);
    const paginate = (0, _jwPaginate.default)(total, currentPage, parseInt(perPage, 10));
    const isFirstPage = currentPage === paginate.startPage;
    const isLastPage = currentPage === paginate.endPage;
    const prevPage = isFirstPage ? currentPage : currentPage - 1;
    const nextPage = isLastPage ? currentPage : currentPage + 1;

    if (paginate.totalPages === 1 || total === 0) {
      return null;
    }

    return _react.default.createElement(PaginationWrapper, null, _react.default.createElement("div", {
      className: "pagination"
    }, _react.default.createElement(_styledButton.default, {
      to: {
        search: this.linkToPage(prevPage)
      },
      className: `button is-white${isFirstPage ? ' disabled' : ''}`
    }, _react.default.createElement("i", {
      className: "icomoon-pagination-left"
    })), paginate.pages.map(p => _react.default.createElement(_styledButton.default, {
      key: p,
      to: {
        search: this.linkToPage(p)
      },
      className: `pages button is-white${p === currentPage ? ' is-primary' : ''}`
    }, p)), _react.default.createElement(_styledButton.default, {
      to: {
        search: this.linkToPage(nextPage)
      },
      className: `button is-white${isLastPage ? ' disabled' : ''}`
    }, _react.default.createElement("i", {
      className: "icomoon-pagination-right"
    }))));
  }

}

Paginate.propTypes = {
  /**
   * Current page
   */
  page: _propTypes.default.number.isRequired,

  /**
   * Items per page
   */
  perPage: _propTypes.default.number.isRequired,

  /**
   * Total number of items
   */
  total: _propTypes.default.number.isRequired,

  /**
   * Location passed from the react-router
   */
  location: _types.locationType.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(Paginate);

exports.default = _default;