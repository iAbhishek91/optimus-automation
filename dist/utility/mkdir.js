"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _logger = require("../support/logger");

/**
 * @description this function creates a directory from
 * the path string. it uses path.join(__dirname, dirPath).
 * "dirPath" should be in format "dir1/dir2/dir3"
 * This function automatically joins the path based on
 * operating system used.
 * @param {String} dirPath
 */
var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(dirPath) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _fs["default"].mkdir(dirPath, {
              recursive: true
            }, function (error) {
              if (error && !error.code === 'EEXIST') throw error;

              if (error && error.code === 'EEXIST') {
                _logger.logger.info("Directory already exists ".concat(dirPath, "!"));

                return 0;
              }

              _logger.logger.success("Directory created at ".concat(dirPath, "."));

              return 1;
            });

          case 1:
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