"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = require("fs");

var _constants = require("../../constants");

var _logAndThrowError = _interopRequireDefault(require("../../logAndThrowError"));

var _default2 = require("../../config/default");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

var _default = function _default() {
  var configFromOptimusrc;

  if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
    var _configFromOptimusrc = require(_constants.CONFIG_FILE); // eslint-disable-line

  } else {
    (0, _logAndThrowError["default"])(noConfigErrMsg);
  } // verify config from optimusrc has webdriverIO object.


  var isWebdriverIOOptionDefined = Object.prototype.hasOwnProperty.call(configFromOptimusrc, _constants.CONFIG_GROUPS.webdriverIO); // If webdriverIO is not defined in optimusrc, return default config values.

  if (isWebdriverIOOptionDefined) return _default2.defaultWebdriverIOOptions; // overriding default configuration with "optimusrc.js" configuration

  return _objectSpread({}, _default2.defaultWebdriverIOOptions, {}, configFromOptimusrc[_constants.CONFIG_GROUPS.webdriverIO]);
};

exports["default"] = _default;