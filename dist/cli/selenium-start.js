"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _fs = require("fs");

var _parseSeleniumConfig = _interopRequireDefault(require("../config/parseSeleniumConfig"));

var _logAndThrowError = _interopRequireDefault(require("../logAndThrowError"));

var _start = _interopRequireDefault(require("../modules/selenium-standalone/start"));

var _constants = require("../constants");

var _logger = require("../modules/logger");

var optionDefinitions;
var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

var _default = function _default() {
  if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
    var config = require(_constants.CONFIG_FILE); // eslint-disable-line


    optionDefinitions = (0, _parseSeleniumConfig["default"])(config);
  } else {
    (0, _logAndThrowError["default"])(noConfigErrMsg);
  }

  try {
    /*
      Why { argv: [] } is passed as argument?
       > "commandLineArgs" function take an optional object argument.
      > Each time, by default it processes the process.argv,
      along with options mentioned by "-" or "--".
      > Since we have already processed main command in bin/optimus.js file,
      we are explicitly configuring argv to empty array.
    */
    var options = (0, _commandLineArgs["default"])(optionDefinitions, {
      argv: []
    });
    (0, _start["default"])(options);
  } catch (error) {
    (0, _logAndThrowError["default"])(error);
  }
};

exports["default"] = _default;