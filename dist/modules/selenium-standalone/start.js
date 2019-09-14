"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _seleniumStandalone = _interopRequireDefault(require("selenium-standalone"));

var _logger = require("../logger");

var _logAndThrowError = _interopRequireDefault(require("../../logAndThrowError"));

var _default = function _default(seleniumOptions) {
  var seleniumVersion = seleniumOptions.seleniumVersion,
      chromeVersion = seleniumOptions.chromeVersion,
      ieVersion = seleniumOptions.ieVersion,
      firefoxVersion = seleniumOptions.firefoxVersion;
  var ie = {
    version: ieVersion
  };
  var chrome = {
    version: chromeVersion
  };
  var firefox = {
    version: firefoxVersion
  };
  var options = {
    version: seleniumVersion,
    drivers: {
      chrome: chrome,
      firefox: firefox,
      ie: ie
    }
  };

  _seleniumStandalone["default"].start(options, function (error) {
    if (error) (0, _logAndThrowError["default"])(error);

    _logger.logger.info('Selenium standalone server started.');
  });
};

exports["default"] = _default;