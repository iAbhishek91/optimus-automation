"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logger = require("../../logger");

var _validateDatatype = require("../../../utility/validateDatatype");

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(appUrl) {
    var pathname,
        updatedUrl,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;

            if ((0, _validateDatatype.isUndefined)(appUrl)) {
              (0, _logger.errorLog)("Application URL is invalid! ".concat(appUrl));
            }

            if (pathname) {
              _context.next = 8;
              break;
            }

            _logger.plainLog.info("Launching URL: ".concat(appUrl));

            _context.next = 6;
            return browser.url(appUrl);

          case 6:
            _context.next = 12;
            break;

          case 8:
            updatedUrl = appUrl + pathname;

            _logger.plainLog.info("Launching URL: ".concat(updatedUrl));

            _context.next = 12;
            return browser.url(updatedUrl);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;