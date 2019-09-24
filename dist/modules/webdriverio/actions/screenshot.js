"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachScreenshot = exports.saveScreenshot = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _logger = require("../../logger");

var _date = require("../../../utility/date");

/**
 * @description used to take and save screenshot of browser viewport.
 * @param {String} filename
 * @param {String} dirName
 * @param {Boolean} appendTimestamp defaults to true
 * @return final file pathname.
 */
var saveScreenshot =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(filename, dirName) {
    var appendTimestamp,
        timezone,
        filePath,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appendTimestamp = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
            timezone = appendTimestamp ? (0, _date.formattedTimezone)() : '';
            filePath = _path["default"].resolve(dirName, "".concat(filename).concat(timezone, ".png"));
            _context.prev = 3;
            _context.next = 6;
            return browser.saveScreenshot(filePath);

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            (0, _logger.errorLog)("Error occurred in \"actions.saveScreenshot\" function! ".concat(_context.t0.message));

          case 11:
            return _context.abrupt("return", filePath);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));

  return function saveScreenshot(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * This function is to be called from cucumber step definition.
 * The screenshot is attached in the cucumber report.
 * Cucumber's "attach" function is used.
 * Example of usage: "await actions.attachScreenshot.call(this, 'some text');"
 * @param {String} filename
 * @param {String} dirPath
 */
// eslint-disable-next-line func-names


exports.saveScreenshot = saveScreenshot;

var attachScreenshot =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filename, dirPath) {
    var filePath, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return saveScreenshot(filename, dirPath);

          case 2:
            filePath = _context2.sent;
            data = _fs["default"].readFileSync(filePath);
            this.attach(data, 'image/png');

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function attachScreenshot(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.attachScreenshot = attachScreenshot;