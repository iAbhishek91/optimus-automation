"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("./default");

var _constants = require("../constants");

/**
 * @description Transform the inputs into "command-line-args" compatible object.
 * @param {String} name name of the CLI option
 * @param {*} defaultValue default value of the option if not configured from CLI.
 * @returns "command-line-args" compatible object.
 */
var transformToCliArgObj = function transformToCliArgObj(name, defaultValue) {
  return {
    name: name,
    defaultValue: defaultValue,
    group: _constants.CONFIG_GROUPS.selenium
  };
};
/**
 * @description To install or start "selenium-standalone". The configuration required,
 * are passed from "optimusrc.js" file, else will set to default. Then all the
 * configurations are re-structured to be compatible with "command-line-args". This will
 * enable user to pass configuration value from CLI.
 * @param {Object} config Object from "optimusrc.js", should be defined in the dependent project.
 * @returns Array consisting of all the configuration required by "selenium-standalone".
 * Each element of the return array is an compatible "command-line-arg" Object.
 */


var _default = function _default(configFromOptimusrc) {
  // validate if user wish to use selenium or not.
  var isSeleniumDefined = Object.prototype.hasOwnProperty.call(configFromOptimusrc, _constants.CONFIG_GROUPS.selenium); // if selenium options are not passed, then default seleniumOptions are not configured.

  if (!isSeleniumDefined) return [];
  var seleniumOptionDefinitions = []; // configuration passed from "optimusrc.js"

  var seleniumOptions = configFromOptimusrc.seleniumOptions; // push options required to download selenium-standalone

  seleniumOptionDefinitions.push(transformToCliArgObj('seleniumBaseURL', seleniumOptions.seleniumBaseURL || _default2.defaultSeleniumOptions.seleniumBaseURL), transformToCliArgObj('seleniumVersion', seleniumOptions.seleniumVersion || _default2.defaultSeleniumOptions.seleniumVersion)); // validate list of browser user want to use. By default all the browser will not be loaded.

  var isChromeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'chromeVersion');
  var isIeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'ieVersion');
  var isFirefoxDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'firefoxVersion');
  var isEdgeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'edgeVersion'); // push options required to download chomeDriver

  if (isChromeDefined) {
    seleniumOptionDefinitions.push(transformToCliArgObj('chromeBaseURL', seleniumOptions.chromeBaseURL || _default2.defaultSeleniumOptions.chromeBaseURL), transformToCliArgObj('chromeVersion', seleniumOptions.chromeVersion));
  } // push options required to download ieDriver


  if (isIeDefined) {
    seleniumOptionDefinitions.push(transformToCliArgObj('ieBaseURL', seleniumOptions.ieBaseURL || _default2.defaultSeleniumOptions.ieBaseURL), transformToCliArgObj('ieVersion', seleniumOptions.ieVersion));
  } // push options required to download firefoxDriver


  if (isFirefoxDefined) {
    seleniumOptionDefinitions.push(transformToCliArgObj('firefoxBaseURL', seleniumOptions.firefoxBaseURL || _default2.defaultSeleniumOptions.firefoxBaseURL), transformToCliArgObj('firefoxVersion', seleniumOptions.firefoxVersion));
  } // push options required to download edgeDriver


  if (isEdgeDefined) {
    seleniumOptionDefinitions.push(transformToCliArgObj('edgeVersion', seleniumOptions.edgeVersion));
  } // "seleniumOptionDefinitions" is an array of command-line-arg compatible objects.
  // Refer the below URL for official documentation from command-line-arg object.
  // URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md


  return seleniumOptionDefinitions;
};

exports["default"] = _default;