"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWebdriverIOOptions = exports.defaultSeleniumOptions = exports.defaultCucumberOptions = exports.defaultFrameworkOptions = void 0;

var _path = _interopRequireDefault(require("path"));

// below configuration is used by this project, user can modify these configs from optimusrc.js.
var defaultFrameworkOptions = {
  outputDir: 'output',
  isReportsPersistent: false
}; // below configuration is used by cucumber Options

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
}; // below configuration is used by selenium-standalone server

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
}; // below configuration is used by webdriverIO APIs

exports.defaultSeleniumOptions = defaultSeleniumOptions;
var defaultWebdriverIOOptions = {
  defaultWaitForElementToExistsInMs: 30 * 1000
};
exports.defaultWebdriverIOOptions = defaultWebdriverIOOptions;