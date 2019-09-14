"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSeleniumOptions = exports.defaultCucumberOptions = exports.defaultFrameworkOptions = void 0;

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
var defaultSeleniumOptions = {
  arch: process.arch,
  seleniumBaseURL: 'https://selenium-release.storage.googleapis.com',
  seleniumVersion: '3.141.5',
  chromeBaseURL: 'https://chromedriver.storage.googleapis.com',
  chromeVersion: '2.43',
  ieBaseURL: 'https://selenium-release.storage.googleapis.com',
  ieVersion: '3.14.0',
  firefoxBaseURL: 'https://github.com/mozilla/geckodriver/releases/download',
  firefoxVersion: '0.23.0'
};
exports.defaultSeleniumOptions = defaultSeleniumOptions;