"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../types");

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _errorBoundary = _interopRequireDefault(require("./error-boundary"));

var _actions = _interopRequireDefault(require("../actions"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-has-content */

/**
 * @classdesc
 * Component which renders all the default and custom actions for both the Resource and the Record.
 *
 * It passes all props down to the actual Action component.
 *
 * Example of creating your own actions:
 * ```
 * // AdminBro options
 * const AdminBroOptions = {
 *   resources: [
 *      resource,
 *      options: {
 *        actions: {
 *           myNewAction: {
 *             label: 'amazing action',
 *             icon: 'fas fa-eye',
 *             inVisible: (resource, record) => record.param('email') !== '',
 *             actionType: 'record',
 *             component: AdminBro.require('./my-new-action'),
 *             handler: (request, response, data) => {
 *               return {
 *                  ...
 *               }
 *             }
 *           }
 *        }
 *      }
 *   ]
 * }
 * ```
 *
 * ```
 * // ./my-new-action.jsx
 * import WrapperBox from 'admin-bro/components'
 *
 * const MyNewAction = (props) => {
 *   const { resource, action, record } = props
 *   // do something with the props and render action
 *   return (
 *     <WrapperBox>Some Action Content</WrapperBox>
 *   )
 * }
 * ```
 *
 * @component
 * @hideconstructor
 * @category Base
 */
class BaseActionComponent extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: false
    };
  }

  componentDidMount() {
    this.setState({
      isClient: true
    });
  }

  render() {
    const {
      resource,
      action,
      record
    } = this.props;
    const {
      isClient
    } = this.state;
    const documentationLink = [_constants.DOCS, 'BaseAction.html'].join('/');
    let Action = _actions.default[action.name];

    if (isClient && action.component) {
      Action = AdminBro.UserComponents[action.component];
    }

    if (Action) {
      return _react.default.createElement(_errorBoundary.default, null, _react.default.createElement(Action, {
        action: action,
        resource: resource,
        record: record
      }));
    }

    return Action || _react.default.createElement(_wrapperBox.default, {
      border: true
    }, _react.default.createElement("div", {
      className: "notification"
    }, "You have to implement action component for your Action. See:", ' ', _react.default.createElement("a", {
      href: documentationLink
    }, "the documentation")));
  }

}

BaseActionComponent.propTypes = {
  /**
   * Object of type: {@link BaseResource~JSON}
   */
  resource: _types.resourceType.isRequired,

  /**
   * Object of type: {@link Action~JSON}
   */
  action: _types.actionType.isRequired,

  /**
   * Object of type: {@link BaseRecord~JSON}
   */
  record: _types.recordType
};
BaseActionComponent.defaultProps = {
  record: null
};
var _default = BaseActionComponent;
exports.default = _default;