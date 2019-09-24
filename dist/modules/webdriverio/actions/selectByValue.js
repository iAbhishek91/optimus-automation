"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _selectByAttribute = _interopRequireDefault(require("./selectByAttribute"));

var _config2 = _interopRequireDefault(require("../config"));

var _config = (0, _config2["default"])(),
    defaultWaitForElementToExistsInMs = _config.defaultWaitForElementToExistsInMs;

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(locator, value) {
    var timeout,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeout = _args.length > 2 && _args[2] !== undefined ? _args[2] : defaultWaitForElementToExistsInMs;
            _context.next = 3;
            return (0, _selectByAttribute["default"])(locator, 'value', value, timeout);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;