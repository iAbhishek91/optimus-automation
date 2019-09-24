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

/**
 * @description Transform the inputs into "command-line-args" compatible object.
 * @param {String} name name of the CLI option
 * @param {*} defaultValue default value of the option if not configured from CLI.
 * @returns "command-line-args" compatible object.
 */
var transformToCliArgObj = function transformToCliArgObj(name, defaultValue, group) {
  return {
    name: name,
    defaultValue: defaultValue,
    group: group
  };
};
/**
 * @description This function does below steps
 * 1. Set the default option value based on the config group
 * 2. Override default options object using options object passed from "optimusrc.js"
 * 3. Restructure the object to be compatible with "command-line-args"
 * @param {String} configGroup config group defines what type of configuration are you passing.
 * @param {Object} optionValues Options object passed from "optimusrc.js"
 * @return array of command-line-args compatible object
 */


var processOptionsForConfigGroup = function processOptionsForConfigGroup(configGroup, optionValues) {
  var optionDefinitions = []; // select default value object based on the config group

  var defaultOptionValues;
  if (configGroup === _constants.CONFIG_GROUPS.framework) defaultOptionValues = _default2.defaultFrameworkOptions;
  if (configGroup === _constants.CONFIG_GROUPS.cucumber) defaultOptionValues = _default2.defaultCucumberOptions; // spread optionValues passed from framework to override defaultOptionValues

  var updatedOptionValues = _objectSpread({}, defaultOptionValues, {}, optionValues); // restructuring to make it compatible with command-line-args


  Object.keys(updatedOptionValues).forEach(function (option) {
    optionDefinitions.push(transformToCliArgObj(option, updatedOptionValues[option], configGroup));
  }); // Array of command-line-arg compatible objects.

  return optionDefinitions;
};
/**
 * @description To initialize "cucumber JS". The configuration required,
 * are passed from "optimusrc.js" file, else will set to default. Then all the
 * configurations are re-structured to be compatible with "command-line-args". This will
 * enable user to pass configuration value from CLI.
 * @param {Object} config Object from "optimusrc.js", should be defined in the dependent project.
 * @returns Array consisting of all the configuration required by "selenium-standalone".
 * Each element of the return array is an compatible "command-line-arg" Object.
 */


var _default = function _default(configFromOptimusrc) {
  var customOptions = configFromOptimusrc.customOptions,
      frameworkOptions = configFromOptimusrc.frameworkOptions,
      cucumberOptions = configFromOptimusrc.cucumberOptions; // process frameworkOptions

  var frameworkOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.framework, frameworkOptions); // process cucumberOptions

  var cucumberOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.cucumber, cucumberOptions); // Array of command-line-arg compatible objects.
  // Refer the below URL for official documentation from command-line-arg object.
  // URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md

  return [].concat((0, _toConsumableArray2["default"])(customOptions), (0, _toConsumableArray2["default"])(frameworkOptionDefinitions), (0, _toConsumableArray2["default"])(cucumberOptionDefinitions));
};

exports["default"] = _default;