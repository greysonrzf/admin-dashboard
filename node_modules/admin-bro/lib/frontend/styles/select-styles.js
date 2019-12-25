"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.filterStyles = void 0;

var _variables = require("./variables");

const selectStyles = {
  control: (provided, state) => ({ ...provided,
    border: state.isFocused ? `1px solid ${_variables.colors.primary}` : `1px solid ${_variables.colors.border}`,
    borderRadius: '0px',
    background: 'transparent'
  }),
  menu: provided => ({ ...provided,
    borderRadius: '0px',
    borderColor: _variables.colors.border
  })
};
const filterStyles = {
  control: (provided, state) => ({ ...provided,
    border: state.isFocused ? `1px solid ${_variables.colors.primary}` : `1px solid ${_variables.colors.borderOnDark}`,
    borderRadius: '0px',
    background: 'transparent',
    color: _variables.colors.lightText
  }),
  input: () => ({
    color: '#fff'
  }),
  singleValue: () => ({
    color: _variables.colors.lightText
  }),
  option: (provided, state) => ({ ...provided,
    color: state.isSelected ? '#ffffff' : _variables.colors.lightText,
    background: state.isFocused ? 'rgba(32,39,62,0.25)' : 'transparent'
  }),
  menu: provided => ({ ...provided,
    borderRadius: '0px',
    borderColor: _variables.colors.border,
    background: _variables.colors.darkBck,
    zIndex: 5
  })
};
exports.filterStyles = filterStyles;
var _default = selectStyles;
exports.default = _default;