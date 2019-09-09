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

var processOptionsForConfigGroup = function processOptionsForConfigGroup(configGroup, optionValues) {
  var optionDefinitions = []; // select default value object based on the config group

  var defaultOptionValues = configGroup === _constants.CONFIG_GROUPS.framework ? _default2.defaultFrameworkOptions : _default2.defaultCucumberOptions; // spread optionValues passed from framework to override defaultOptionValues

  var updatedOptionValues = _objectSpread({}, defaultOptionValues, {}, optionValues); // restructuring to make it compatible with command-line-args


  Object.keys(updatedOptionValues).forEach(function (option) {
    optionDefinitions.push({
      name: option,
      defaultValue: updatedOptionValues[option],
      group: configGroup
    });
  });
  return optionDefinitions;
};

var _default = function _default(config) {
  var customOptions = config.customOptions,
      frameworkOptions = config.frameworkOptions,
      cucumberOptions = config.cucumberOptions; // Process frameworkOptions

  var frameworkOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.framework, frameworkOptions); // validate and parse cucumber options

  var cucumberOptionDefinitions = processOptionsForConfigGroup(_constants.CONFIG_GROUPS.cucumber, cucumberOptions);
  return [].concat((0, _toConsumableArray2["default"])(customOptions), (0, _toConsumableArray2["default"])(frameworkOptionDefinitions), (0, _toConsumableArray2["default"])(cucumberOptionDefinitions));
};

exports["default"] = _default;