"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _constants = require("../../constants");

var _default = function _default(options) {
  var _options$CONFIG_GROUP = options[_constants.CONFIG_GROUPS.cucumber],
      featureRootDir = _options$CONFIG_GROUP.featureRootDir,
      featurePath = _options$CONFIG_GROUP.featurePath,
      featureFilename = _options$CONFIG_GROUP.featureFilename,
      require = _options$CONFIG_GROUP.require,
      format = _options$CONFIG_GROUP.format,
      reportName = _options$CONFIG_GROUP.reportName,
      tags = _options$CONFIG_GROUP.tags,
      parallel = _options$CONFIG_GROUP.parallel;
  var outputDir = options[_constants.CONFIG_GROUPS.framework].outputDir;
  var cucumberOptions = [_path["default"].join(featureRootDir, featurePath, "".concat(featureFilename, ".feature")), '--require', require, '-f', "".concat(format, ":").concat(_path["default"].join(outputDir, "".concat(reportName, ".json")))];
  if (tags) cucumberOptions.push('--tags', tags);
  if (parallel !== _constants.IS_YN.N) cucumberOptions.push('--parallel', parallel);
  return cucumberOptions;
};

exports["default"] = _default;