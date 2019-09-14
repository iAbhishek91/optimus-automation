"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _seleniumStandalone = _interopRequireDefault(require("selenium-standalone"));

var _logger2 = require("../logger");

var _logAndThrowError = _interopRequireDefault(require("../../logAndThrowError"));

var progressCB = function progressCB(totalLength, progressLength) {
  _logger2.logger.info("Installing selenium and drivers .... (".concat(totalLength, ", ").concat(progressLength, ")%"));
};

var _default = function _default(seleniumOptions) {
  var arch = seleniumOptions.arch,
      seleniumBaseURL = seleniumOptions.seleniumBaseURL,
      seleniumVersion = seleniumOptions.seleniumVersion,
      chromeBaseURL = seleniumOptions.chromeBaseURL,
      chromeVersion = seleniumOptions.chromeVersion,
      ieBaseURL = seleniumOptions.ieBaseURL,
      ieVersion = seleniumOptions.ieVersion,
      firefoxBaseURL = seleniumOptions.firefoxBaseURL,
      firefoxVersion = seleniumOptions.firefoxVersion;
  var chrome = {
    arch: arch,
    version: chromeVersion,
    baseURL: chromeBaseURL
  };
  var firefox = {
    arch: arch,
    version: firefoxVersion,
    baseURL: firefoxBaseURL
  };
  var ie = {
    arch: arch,
    version: ieVersion,
    baseURL: ieBaseURL
  };
  var options = {
    version: seleniumVersion,
    baseURL: seleniumBaseURL,
    drivers: {
      chrome: chrome,
      firefox: firefox,
      ie: ie
    },
    logger: function logger(message) {
      _logger2.logger.info(message);
    },
    progressCB: progressCB
  };

  _seleniumStandalone["default"].install(options, function (error) {
    if (error) (0, _logAndThrowError["default"])(error);

    _logger2.logger.info('Selenium standalone is installed successfully.');
  });
};

exports["default"] = _default;