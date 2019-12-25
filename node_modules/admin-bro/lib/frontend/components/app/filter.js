"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledButton = _interopRequireDefault(require("../ui/styled-button"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilterWrapper = _styledComponents.default.section.withConfig({
  displayName: "filter__FilterWrapper",
  componentId: "mowuhm-0"
})(["background:", ";flex-shrink:0;width:", ";color:#fff;padding-top:60px;transition:width 0.5s;position:absolute;top:0;right:0;bottom:0;overflow-x:hidden;overflow-y:scroll;&.filter-hidden{width:0;transition:width 0.5s;}"], ({
  theme
}) => theme.colors.darkBck, ({
  theme
}) => theme.sizes.sidebarWidth);

const FilterLink = _styledComponents.default.a.withConfig({
  displayName: "filter__FilterLink",
  componentId: "mowuhm-1"
})(["color:#fff;& > span{opacity:0.25;color:", ";border:1px solid ", ";border-radius:3px;padding:8px 10px;margin-right:", ";}&:hover{color:", ";& span{color:", ";border-color:", ";opacity:1;}}"], ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.colors.lightText, ({
  theme
}) => theme.sizes.padding, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primary);

const FilterContent = _styledComponents.default.section.withConfig({
  displayName: "filter__FilterContent",
  componentId: "mowuhm-2"
})(["padding:", ";width:", ";overflow:hidden;& a,& button{margin:", " 0;width:100%;}"], ({
  theme
}) => theme.sizes.paddingLayout, ({
  theme
}) => theme.sizes.sidebarWidth, ({
  theme
}) => theme.sizes.paddingMin);

class Filter extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.state = {
      filter: this.parseQuery()
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      match
    } = this.props;

    if (nextProps.match.params.resourceId !== match.params.resourceId) {
      this.setState({
        filter: {}
      });
    }
  }

  parseQuery() {
    const {
      location
    } = this.props;
    const filter = {};
    const query = new URLSearchParams(location.search);

    for (const entry of query.entries()) {
      const [key, value] = entry;

      if (key.match('filters.')) {
        filter[key.replace('filters.', '')] = value;
      }
    }

    return filter;
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      filter
    } = this.state;
    const {
      history
    } = this.props;
    const search = new URLSearchParams(window.location.search);
    Object.keys(filter).forEach(key => {
      if (filter[key] !== '') {
        search.set(`filters.${key}`, filter[key]);
      } else {
        search.delete(`filters.${key}`);
      }
    });
    search.set('page', 1);
    history.push(`${history.location.pathname}?${search.toString()}`);
    return false;
  }

  resetFilter(event) {
    const {
      history
    } = this.props;
    event.preventDefault();
    const filteredSearch = new URLSearchParams();
    const search = new URLSearchParams(window.location.search);

    for (const key of search.keys()) {
      if (!key.match('filters.')) {
        filteredSearch.set(key, search.get(key));
      }
    }

    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
    history.push(history.location.pathname + query);
    this.setState({
      filter: {}
    });
  }

  handleChange(propertyName, value) {
    this.setState(state => ({
      filter: { ...state.filter,
        [propertyName]: value
      }
    }));
  }

  render() {
    const {
      resource,
      isVisible,
      toggleFilter
    } = this.props;
    const {
      filter
    } = this.state;
    const properties = resource.filterProperties;
    return _react.default.createElement(FilterWrapper, {
      className: isVisible ? null : 'filter-hidden'
    }, _react.default.createElement(FilterContent, null, _react.default.createElement(FilterLink, {
      onClick: toggleFilter
    }, _react.default.createElement("span", null, _react.default.createElement("i", {
      className: "fas fa-arrow-right"
    })), "Filter"), _react.default.createElement("form", {
      onSubmit: this.handleSubmit.bind(this)
    }, properties.map(property => _react.default.createElement(_propertyType.default, {
      key: property.name,
      where: "filter",
      onChange: this.handleChange,
      property: property,
      filter: filter,
      resource: resource
    })), _react.default.createElement(_styledButton.default, {
      as: "button",
      className: "is-primary"
    }, "Apply Changes"), _react.default.createElement(_styledButton.default, {
      as: "a",
      className: "is-text",
      onClick: this.resetFilter
    }, "Clear filters"))));
  }

}

Filter.propTypes = {
  location: _types.locationType.isRequired,
  history: _types.historyType.isRequired,
  resource: _types.resourceType.isRequired,
  isVisible: _propTypes.default.bool.isRequired,
  toggleFilter: _propTypes.default.func.isRequired,
  match: _types.matchType.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(Filter);

exports.default = _default;