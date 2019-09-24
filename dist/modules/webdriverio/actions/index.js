"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _click = _interopRequireDefault(require("./click"));

var _setValue = _interopRequireDefault(require("./setValue"));

var _getText = _interopRequireDefault(require("./getText"));

var _isExisting = _interopRequireDefault(require("./isExisting"));

var _selectByValue = _interopRequireDefault(require("./selectByValue"));

var _selectByAttribute = _interopRequireDefault(require("./selectByAttribute"));

var _url = _interopRequireDefault(require("./url"));

var screenshot = _interopRequireWildcard(require("./screenshot"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getUrl =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", browser.getUrl());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUrl() {
    return _ref.apply(this, arguments);
  };
}();

var refresh =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", browser.refresh());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function refresh() {
    return _ref2.apply(this, arguments);
  };
}();

var _default = _objectSpread({}, screenshot, {
  isExisting: _isExisting["default"],
  click: _click["default"],
  setValue: _setValue["default"],
  selectByAttribute: _selectByAttribute["default"],
  selectByValue: _selectByValue["default"],
  getText: _getText["default"],
  getUrl: getUrl,
  refresh: refresh,
  url: _url["default"]
});

exports["default"] = _default;