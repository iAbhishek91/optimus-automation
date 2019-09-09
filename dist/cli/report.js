"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _fs = require("fs");

var _parseConfig = _interopRequireDefault(require("../config/parseConfig"));

var _logAndThrowError = _interopRequireDefault(require("../logAndThrowError"));

var _htmlReportGenerator = _interopRequireDefault(require("../support/cucumber/htmlReportGenerator"));

var _constants = require("../constants");

var optionDefinitions;
var noConfigErrMsg = "No configuration file found! Please define \"".concat(_constants.CONFIG_FILE, "\" at root.");

if ((0, _fs.existsSync)(_constants.CONFIG_FILE)) {
  var config = require(_constants.CONFIG_FILE); // eslint-disable-line


  optionDefinitions = (0, _parseConfig["default"])(config);
} else {
  (0, _logAndThrowError["default"])(noConfigErrMsg);
}

try {
  var options = (0, _commandLineArgs["default"])(optionDefinitions);
  var _options$CONFIG_GROUP = options[_constants.CONFIG_GROUPS.framework],
      isReportsPersistent = _options$CONFIG_GROUP.isReportsPersistent,
      outputDir = _options$CONFIG_GROUP.outputDir;
  (0, _htmlReportGenerator["default"])(isReportsPersistent, outputDir, options[_constants.CONFIG_GROUPS.cucumber].reportName);
} catch (error) {
  (0, _logAndThrowError["default"])(error);
}