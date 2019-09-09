"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCucumberOptions = exports.defaultFrameworkOptions = void 0;

var _path = _interopRequireDefault(require("path"));

var defaultFrameworkOptions = {
  outputDir: 'output',
  isReportsPersistent: false
};
exports.defaultFrameworkOptions = defaultFrameworkOptions;
var defaultCucumberOptions = {
  featureRootDir: _path["default"].join(process.cwd(), 'features'),
  featurePath: '**',
  featureFilename: '*',
  reportName: 'cucumberReport',
  require: 'dist/step_definitions/',
  format: 'json',
  parallel: false,
  tags: null
};
exports.defaultCucumberOptions = defaultCucumberOptions;