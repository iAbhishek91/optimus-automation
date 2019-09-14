"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _default2 = require("./default");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var transformToCliArgObj = function transformToCliArgObj(name, defaultValue, group) {
  return {
    name: name,
    defaultValue: defaultValue,
    group: group
  };
};

var processOptionsForConfigGroup = function processOptionsForConfigGroup(configGroup, optionValues) {
  var optionDefinitions = []; // select default value object based on the config group

  var defaultOptionValues;
  if (configGroup === _constants.CONFIG_GROUPS.framework) defaultOptionValues = _default2.defaultFrameworkOptions;
  if (configGroup === _constants.CONFIG_GROUPS.cucumber) defaultOptionValues = _default2.defaultCucumberOptions; // spread optionValues passed from framework to override defaultOptionValues

  var updatedOptionValues = _objectSpread({}, defaultOptionValues, {}, optionValues); // restructuring to make it compatible with command-line-args


  Object.keys(updatedOptionValues).forEach(function (option) {
    optionDefinitions.push(transformToCliArgObj(option, updatedOptionValues[option], configGroup));
  });
  return optionDefinitions;
};

var processSeleniumOptions = function processSeleniumOptions(config) {
  var isSeleniumDefined = Object.prototype.hasOwnProperty.call(config, _constants.CONFIG_GROUPS.selenium); // if selenium options are not passed, then default seleniumOptions are not configured.

  if (!isSeleniumDefined) return [];
  var cucumberOptionDefinitions = [];
  var seleniumOptions = config.seleniumOptions; // push options required to download selenium-standalone

  cucumberOptionDefinitions.push(transformToCliArgObj('seleniumBaseURL', seleniumOptions.seleniumBaseURL || _default2.defaultSeleniumOptions.seleniumBaseURL, _constants.CONFIG_GROUPS.selenium), transformToCliArgObj('seleniumVersion', seleniumOptions.seleniumVersion || _default2.defaultSeleniumOptions.seleniumVersion, _constants.CONFIG_GROUPS.selenium));
  var isChromeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'chromeVersion');
  var isIeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'ieVersion');
  var isFirefoxDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'firefoxVersion');
  var isEdgeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'edgeVersion'); // push options required to download chomeDriver

  if (isChromeDefined) {
    cucumberOptionDefinitions.push(transformToCliArgObj('chromeBaseURL', seleniumOptions.chromeBaseURL || _default2.defaultSeleniumOptions.chromeBaseURL, _constants.CONFIG_GROUPS.selenium), transformToCliArgObj('chromeVersion', seleniumOptions.chromeVersion, _constants.CONFIG_GROUPS.selenium));
  } // push options required to download ieDriver


  if (isIeDefined) {
    cucumberOptionDefinitions.push(transformToCliArgObj('ieBaseURL', seleniumOptions.ieBaseURL || _default2.defaultSeleniumOptions.ieBaseURL, _constants.CONFIG_GROUPS.selenium), transformToCliArgObj('ieVersion', seleniumOptions.ieVersion, _constants.CONFIG_GROUPS.selenium));
  } // push options required to download firefoxDriver


  if (isFirefoxDefined) {
    cucumberOptionDefinitions.push(transformToCliArgObj('firefoxBaseURL', seleniumOptions.firefoxBaseURL || _default2.defaultSeleniumOptions.firefoxBaseURL, _constants.CONFIG_GROUPS.selenium), transformToCliArgObj('firefoxVersion', seleniumOptions.firefoxVersion, _constants.CONFIG_GROUPS.selenium));
  } // push options required to download edgeDriver


  if (isEdgeDefined) {
    cucumberOptionDefinitions.push(transformToCliArgObj('edgeVersion', seleniumOptions.edgeVersion, _constants.CONFIG_GROUPS.selenium));
  }

  return cucumberOptionDefinitions;
};

var _default = function _default(config) {
  var customOptions = config.customOptions,
      frameworkOptions = config.frameworkOptions,
      cucumberOptions = config.cucumberOptions; // process frameworkOptions

  var frameworkOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.framework, frameworkOptions); // process cucumberOptions

  var cucumberOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.cucumber, cucumberOptions); // process seleniumOptions

  var seleniumOptionDefinitions = processSeleniumOptions(config);
  return [].concat((0, _toConsumableArray2["default"])(customOptions), (0, _toConsumableArray2["default"])(frameworkOptionDefinitions), (0, _toConsumableArray2["default"])(cucumberOptionDefinitions), (0, _toConsumableArray2["default"])(seleniumOptionDefinitions));
};

exports["default"] = _default;