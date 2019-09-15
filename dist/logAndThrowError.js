"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = require("./modules/logger");

var _default = function _default(errMsg) {
  _logger.logger.error(errMsg);

  throw new Error(errMsg);
};

exports["default"] = _default;