"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _wrapperBox = _interopRequireDefault(require("../ui/wrapper-box"));

var _styledButton = _interopRequireDefault(require("../ui/styled-button"));

var _propertyInEdit = _interopRequireDefault(require("../ui/property-in-edit"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlobalStyle = _styledComponents.createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    background: ${({
  theme
}) => theme.colors.superDarkBck};
    font-size: ${({
  theme
}) => theme.fonts.base};
  }

  a {
    color: ${({
  theme
}) => theme.colors.primary};
  }
`;

const FlexWrapper = _styledComponents.default.section.withConfig({
  displayName: "login__FlexWrapper",
  componentId: "mq06mi-0"
})(["display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;"]);

const LoginBox = _styledComponents.default.section.withConfig({
  displayName: "login__LoginBox",
  componentId: "mq06mi-1"
})(["width:414px;& ", "{margin:", " 0;}& .content{text-align:center;border-bottom:1px solid ", ";margin:", ";padding-bottom:", ";}"], _styledButton.default, ({
  theme
}) => theme.sizes.paddingLayout, ({
  theme
}) => theme.colors.border, ({
  theme
}) => `0 -${theme.sizes.paddingLayout} ${theme.sizes.paddingLayout}`, ({
  theme
}) => theme.sizes.paddingLayout);

const Login = props => {
  const {
    action,
    message
  } = props;
  const email = {
    name: 'email',
    label: 'Your email'
  };
  const password = {
    name: 'password',
    label: 'Password'
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(GlobalStyle, null), _react.default.createElement(FlexWrapper, null, _react.default.createElement(LoginBox, null, _react.default.createElement(_wrapperBox.default, {
    border: true
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("h1", {
    style: {
      marginTop: 25,
      marginBottom: 25
    }
  }, "Welcome!"), _react.default.createElement("p", null, "Please login to proceed to the admin panel")), message && _react.default.createElement("div", {
    className: "notification is-danger"
  }, message), _react.default.createElement("form", {
    action: action,
    method: "POST",
    style: {
      marginBottom: 30
    }
  }, _react.default.createElement(_propertyInEdit.default, {
    property: email,
    className: "field"
  }, _react.default.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Your Email Address",
    className: "input"
  })), _react.default.createElement(_propertyInEdit.default, {
    property: password,
    className: "field"
  }, _react.default.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
    className: "input"
  })), _react.default.createElement(_styledButton.default, {
    as: "button",
    type: "submit",
    className: "is-primary is-fullwidth",
    style: {
      marginTop: 40
    }
  }, "Login"))))));
};

Login.propTypes = {
  message: _propTypes.default.string,
  action: _propTypes.default.string.isRequired
};
Login.defaultProps = {
  message: null
};
var _default = Login;
exports.default = _default;