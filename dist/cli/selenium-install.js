"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _fs = require("fs");

var _parseSeleniumConfig = _interopRequireDefault(require("../config/parseSeleniumConfig"));

var _logAndThrowError = _interopRequireDefault(require("../logAndThrowError"));

var _install = _interopRequireDefault(require("../modules/selenium-standalone/install"));

var _constants = require("../constants");

var optionDefinitions;
var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
  var config = require(_constants.CONFIG_FILE); // eslint-disable-line


  optionDefinitions = (0, _parseSeleniumConfig["default"])(config);
} else {
  (0, _logAndThrowError["default"])(noConfigErrMsg);
}

try {
  var options = (0, _commandLineArgs["default"])(optionDefinitions);
  (0, _install["default"])(options);
} catch (error) {
  (0, _logAndThrowError["default"])(error);
}