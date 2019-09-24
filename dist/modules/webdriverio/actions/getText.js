"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logger = require("../../logger");

var _config2 = _interopRequireDefault(require("../config"));

var _config = (0, _config2["default"])(),
    defaultWaitForElementToExistsInMs = _config.defaultWaitForElementToExistsInMs;

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(locater) {
    var timeout,
        data,
        webElement,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : defaultWaitForElementToExistsInMs;
            _context.prev = 1;
            _context.next = 4;
            return browser.$(locater);

          case 4:
            webElement = _context.sent;
            _context.next = 7;
            return webElement.waitForExist(timeout);

          case 7:
            data = webElement.getText();
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            (0, _logger.errorLog)("Error occurred while performing getText on ".concat(locater));

          case 13:
            return _context.abrupt("return", data);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;