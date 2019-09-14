"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));

var _path = _interopRequireDefault(require("path"));

var _logger = require("../logger");

var _date = require("../../utility/date");

var _default = function _default(isReportsPersistent, outputDir, reportName) {
  var jsonOutputPath = _path["default"].join(process.cwd(), outputDir, "".concat(reportName, ".json"));

  var cucumberHtmlReportPath = _path["default"].join(process.cwd(), outputDir, isReportsPersistent ? "".concat(reportName, ".html") : "".concat(reportName, "-").concat((0, _date.formattedTimezone)(), ".html"));

  var options = {
    theme: 'bootstrap',
    jsonFile: jsonOutputPath,
    output: cucumberHtmlReportPath(isReportsPersistent),
    reportSuiteAsScenario: true,
    launchReport: false
  };

  _logger.logger.info('Generting cucumber HTML report...');

  _cucumberHtmlReporter["default"].generate(options, function (error) {
    if (error) {
      _logger.logger.error(error);

      process.exit(1);
    }

    _logger.logger.success("Cucumber HTML report is generated successfully at ".concat(options.output, "."));
  });
};

exports["default"] = _default;