"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("./default");

var _default = function _default(config) {
  var _config$frameworkOpti = config.frameworkOptions,
      outputDir = _config$frameworkOpti.outputDir,
      isReportsPersistent = _config$frameworkOpti.isReportsPersistent,
      reportName = config.cucumberOptions.reportName;
  var defaultOutputDir = _default2.defaultFrameworkOptions.outputDir,
      defaultIsReportPersistent = _default2.defaultFrameworkOptions.isReportsPersistent;
  var defaultReportName = _default2.defaultCucumberOptions.reportName;
  return [{
    name: 'outputDir',
    defaultValue: outputDir || defaultOutputDir
  }, {
    name: 'isReportsPersistent',
    defaultValue: isReportsPersistent || defaultIsReportPersistent
  }, {
    name: 'reportName',
    defaultValue: reportName || defaultReportName
  }];
};

exports["default"] = _default;