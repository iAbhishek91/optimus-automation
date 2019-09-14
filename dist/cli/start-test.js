"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _fs = require("fs");

var _parseStartTestConfig = _interopRequireDefault(require("../config/parseStartTestConfig"));

var _logger = require("../modules/logger");

var _logAndThrowError = _interopRequireDefault(require("../logAndThrowError"));

var _start = _interopRequireDefault(require("../modules/cucumber/start"));

var _eventListener = _interopRequireDefault(require("../modules/cucumber/eventListener"));

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var optionDefinitions;
var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
  var config = require(_constants.CONFIG_FILE); // eslint-disable-line


  optionDefinitions = (0, _parseStartTestConfig["default"])(config);

  _logger.logger.info(JSON.stringify(optionDefinitions));
} else {
  (0, _logAndThrowError["default"])(noConfigErrMsg);
}

try {
  var options = (0, _commandLineArgs["default"])(optionDefinitions);

  _logger.logger.data("Raw configuration: ".concat(JSON.stringify(options)));

  var cucumberChildProcess = (0, _start["default"])(_objectSpread({}, process.env, {}, options));
  (0, _eventListener["default"])(cucumberChildProcess, options[_constants.CONFIG_GROUPS.framework].outputDir);
} catch (error) {
  (0, _logAndThrowError["default"])(error);
}