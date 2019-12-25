"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Th = _styledComponents.default.th.withConfig({
  displayName: "property-header__Th",
  componentId: "ja7yij-0"
})(["&&&{font-size:", ";text-transform:uppercase;color:", ";font-weight:normal;padding:", ";letter-spacing:0.1em;border:none;}"], ({
  theme
}) => theme.fonts.min, ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.sizes.padding);

const StyledLink = (0, _styledComponents.default)(_reactRouterDom.NavLink).attrs({
  className: 'is-sortable text-small'
}).withConfig({
  displayName: "property-header__StyledLink",
  componentId: "ja7yij-1"
})(["color:", ";&.active{color:", ";}& > i{margin-left:", "}"], ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.sizes.padding);

class SortLink extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive() {
    const {
      sortBy,
      property
    } = this.props;
    return sortBy === property.name;
  }

  render() {
    const {
      property,
      location,
      direction
    } = this.props;
    const query = new URLSearchParams(location.search);
    const opositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
    const sortedByClass = `icomoon-dropdown-${direction === 'asc' ? 'open' : 'close'}`;
    query.set('direction', opositeDirection);
    query.set('sortBy', property.name);
    return _react.default.createElement(StyledLink, {
      to: {
        search: query.toString()
      },
      isActive: this.isActive
    }, property.label, this.isActive() ? _react.default.createElement("i", {
      className: sortedByClass
    }) : '');
  }

}

const PropertyHeader = props => {
  const {
    property,
    resource
  } = props;
  const isMain = property.name === resource.titleProperty.name;
  return _react.default.createElement(Th, {
    className: isMain ? 'main' : null
  }, property.isSortable ? _react.default.createElement(SortLink, props) : property.label);
};

SortLink.propTypes = {
  property: _types.propertyType.isRequired,
  location: _types.locationType.isRequired,
  direction: _propTypes.default.string.isRequired,
  sortBy: _propTypes.default.string.isRequired
};
PropertyHeader.propTypes = {
  property: _types.propertyType.isRequired,
  resource: _types.resourceType.isRequired,

  /**
   * currently selected direction. Either 'asc' or 'desc'.
   */
  direction: _propTypes.default.string.isRequired,

  /**
   * currently selected field by which list is sorted.
   */
  sortBy: _propTypes.default.string.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(PropertyHeader);

exports.default = _default;