"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-for */
const toolbarOptions = [[{
  header: [1, 2, 3, 4, 5, 6, false]
}], ['bold', 'italic', 'underline', 'strike'], // toggled buttons
['blockquote', 'code-block'], [{
  list: 'ordered'
}, {
  list: 'bullet'
}], [{
  script: 'sub'
}, {
  script: 'super'
}], // superscript/subscript
[{
  indent: '-1'
}, {
  indent: '+1'
}], // outdent/indent
[{
  direction: 'rtl'
}], // text direction
[{
  size: ['small', false, 'large', 'huge']
}], // custom dropdown
[{
  color: []
}, {
  background: []
}], // dropdown with defaults from theme
[{
  font: []
}], [{
  align: []
}], ['clean']];

class Edit extends _react.default.Component {
  constructor(props) {
    super(props);
    this.wysiwigRef = _react.default.createRef();
  }

  componentDidMount() {
    this.setupWysiwig();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidUpdate() {
    this.setupWysiwig();
  }

  setupWysiwig() {
    const {
      property,
      record
    } = this.props;
    const value = record.params && record.params[property.name] || '';
    this.wysiwigRef.current.innerHTML = value;
    const quill = new Quill(this.wysiwigRef.current, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });
    quill.on('text-change', () => {
      this.handleChange(this.wysiwigRef.current.children[0].innerHTML);
    });
  }

  handleChange(value) {
    const {
      onChange,
      property
    } = this.props;
    onChange(property.name, value);
  }

  render() {
    const {
      property,
      record
    } = this.props;
    const error = record.errors && record.errors[property.name];
    return _react.default.createElement("div", {
      className: "field"
    }, _react.default.createElement("label", {
      htmlFor: property.name,
      className: "label"
    }, property.label), _react.default.createElement("div", {
      className: "control has-icons-right"
    }, _react.default.createElement("div", {
      className: "quill-editor",
      ref: this.wysiwigRef,
      style: {
        height: '400px'
      }
    })), error && _react.default.createElement("div", {
      className: "help is-danger"
    }, error.message));
  }

}

exports.default = Edit;
Edit.propTypes = {
  property: _types.simplifiedPropertyType.isRequired,
  record: _types.recordType.isRequired,
  onChange: _propTypes.default.func.isRequired
};