"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commandLineArgs2 = _interopRequireDefault(require("command-line-args"));

var _fs = require("fs");

var _parseReportConfig = _interopRequireDefault(require("../config/parseReportConfig"));

var _logAndThrowError = _interopRequireDefault(require("../logAndThrowError"));

var _htmlReportGenerator = _interopRequireDefault(require("../modules/cucumber/htmlReportGenerator"));

var _constants = require("../constants");

var optionDefinitions;
var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

var _default = function _default() {
  if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
    var config = require(_constants.CONFIG_FILE); // eslint-disable-line


    optionDefinitions = (0, _parseReportConfig["default"])(config);
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
    var _commandLineArgs = (0, _commandLineArgs2["default"])(optionDefinitions, {
      argv: []
    }),
        isReportsPersistent = _commandLineArgs.isReportsPersistent,
        outputDir = _commandLineArgs.outputDir,
        reportName = _commandLineArgs.reportName;

    (0, _htmlReportGenerator["default"])(isReportsPersistent, outputDir, reportName);
  } catch (error) {
    (0, _logAndThrowError["default"])(error);
  }
};

exports["default"] = _default;