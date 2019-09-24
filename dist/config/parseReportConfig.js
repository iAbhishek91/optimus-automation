"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("./default");

/**
 * @description To generate report using "cucumber-html-report". The config required,
 * are passed from "optimusrc.js" file, else will set to default. Then all the
 * configurations are re-structured to be compatible with "command-line-args". This will
 * enable user to pass configFromOptimusrcuration value from CLI.
 * @param {Object} configFromOptimusrc Object from "optimusrc.js", defined in the dependent project.
 * @returns Array consisting of all the configuration required by "cucumber-html-report".
 * Each element of the return array is an compatible "command-line-arg" Object.
 */
var _default = function _default(configFromOptimusrc) {
  // configuration passed from "optimusrc.js".
  var _configFromOptimusrc$ = configFromOptimusrc.frameworkOptions,
      outputDir = _configFromOptimusrc$.outputDir,
      isReportsPersistent = _configFromOptimusrc$.isReportsPersistent,
      reportName = configFromOptimusrc.cucumberOptions.reportName; // default framework configuration

  var defaultOutputDir = _default2.defaultFrameworkOptions.outputDir,
      defaultIsReportPersistent = _default2.defaultFrameworkOptions.isReportsPersistent; // default report configuration

  var defaultReportName = _default2.defaultCucumberOptions.reportName; // Array of command-line-arg compatible objects.
  // Refer the below URL for official documentation from command-line-arg object.
  // URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md

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