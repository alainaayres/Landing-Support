"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("./components/header/Header.js"));

var _headPhoto = _interopRequireDefault(require("./components/header/headPhoto.js"));

var _icons = _interopRequireDefault(require("./components/body/icons.js"));

var _demo = _interopRequireDefault(require("./components/body/demo.js"));

var _footer = _interopRequireDefault(require("./components/footer/footer.js"));

var _contacts = _interopRequireDefault(require("./components/body/contacts.js"));

var _reactResponsive = require("react-responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var App = function App() {
  var isPortrait = (0, _reactResponsive.useMediaQuery)({
    query: '(orientation: portrait)'
  });
  var isRetina = (0, _reactResponsive.useMediaQuery)({
    query: '(min-resolution: 2dppx)'
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_headPhoto.default, null), /*#__PURE__*/_react.default.createElement(_icons.default, null), /*#__PURE__*/_react.default.createElement(_contacts.default, null), /*#__PURE__*/_react.default.createElement(_demo.default, null), /*#__PURE__*/_react.default.createElement(_footer.default, null));
};

var _default = App;
exports.default = _default;
