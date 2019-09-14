"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _crossSpawn = require("cross-spawn");

var _path = _interopRequireDefault(require("path"));

var _getCucumberOptions = _interopRequireDefault(require("./getCucumberOptions"));

var _logger = require("../logger");

var cucumber = _path["default"].join('node_modules', '.bin', 'cucumber-js');

var _default = function _default(options) {
  var cucumberOptions = (0, _getCucumberOptions["default"])(options);

  _logger.logger.data("\nCUCUMBER OPTIONS:\n    ".concat(cucumberOptions));

  return (0, _crossSpawn.spawn)(cucumber, (0, _toConsumableArray2["default"])(cucumberOptions), {
    options: options
  });
};

exports["default"] = _default;