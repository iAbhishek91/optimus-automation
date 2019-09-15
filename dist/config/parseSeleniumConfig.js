"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("./default");

var _constants = require("../constants");

var transformToCliArgObj = function transformToCliArgObj(name, defaultValue, group) {
  return {
    name: name,
    defaultValue: defaultValue,
    group: group
  };
};

var _default = function _default(config) {
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

exports["default"] = _default;