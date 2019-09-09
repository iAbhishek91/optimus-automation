"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorLog = exports.plainLog = exports.logger = void 0;

var _winston = require("winston");

var _constants = require("./constants");

var combine = _winston.format.combine,
    printf = _winston.format.printf;
var levels = _constants.LOG_LEVELS.levels,
    colors = _constants.LOG_LEVELS.colors,
    bgColors = _constants.LOG_LEVELS.bgColors;

var formatLevel = function formatLevel(level) {
  switch (level) {
    case 'info':
      return "".concat(bgColors.info).concat(level.toUpperCase()).concat(_constants.ANSI_RESET);

    case 'warn':
      return "".concat(bgColors.warn).concat(level.toUpperCase()).concat(_constants.ANSI_RESET);

    case 'error':
      return "".concat(bgColors.error).concat(level.toUpperCase()).concat(_constants.ANSI_RESET);

    case 'data':
      return "".concat(bgColors.data).concat(level.toUpperCase()).concat(_constants.ANSI_RESET);

    case 'success':
      return "".concat(bgColors.success).concat(level.toUpperCase()).concat(_constants.ANSI_RESET);

    default:
      return level.toUpperCase();
  }
};

var formatMessage = function formatMessage(level, message) {
  switch (level) {
    case 'info':
      return "".concat(colors.info).concat(message).concat(_constants.ANSI_RESET);

    case 'warn':
      return "".concat(colors.warn).concat(message).concat(_constants.ANSI_RESET);

    case 'error':
      return "".concat(colors.error).concat(message).concat(_constants.ANSI_RESET);

    case 'data':
      return "".concat(colors.data).concat(message).concat(_constants.ANSI_RESET);

    case 'success':
      return "".concat(colors.success).concat(message).concat(_constants.ANSI_RESET);

    default:
      return message;
  }
};

var loggerFormat = printf(function (_ref) {
  var timestamp = _ref.timestamp,
      label = _ref.label,
      level = _ref.level,
      message = _ref.message;
  var formattedLabel = "".concat(_constants.ANSI_BRIGHT_BLACK).concat(label).concat(_constants.ANSI_RESET);
  var formattedTimestamp = "".concat(_constants.ANSI_BRIGHT_BLACK).concat(timestamp).concat(_constants.ANSI_RESET);
  var formattedMessage = formatMessage(level, message);
  return "".concat(formattedTimestamp, " ").concat(formatLevel(level), " ").concat(formattedLabel, ": ").concat(formattedMessage);
});
var plainLoggerFormat = printf(function (_ref2) {
  var message = _ref2.message;
  return message;
});
var logger = (0, _winston.createLogger)({
  levels: levels,
  format: combine(_winston.format.label({
    label: 'optimus-automation'
  }), _winston.format.timestamp(), loggerFormat),
  transports: [new _winston.transports.Console(), new _winston.transports.File({
    filename: "".concat(_constants.LOG_DIRECTORY_NAME, "/execution.log")
  }), new _winston.transports.File({
    filename: "".concat(_constants.LOG_DIRECTORY_NAME, "/error.log"),
    level: 'error'
  })]
}); // This logger is used in the child process.

exports.logger = logger;
var plainLog = (0, _winston.createLogger)({
  format: combine(plainLoggerFormat),
  transports: new _winston.transports.Console()
});
/**
 * @description console.error writes to process.stderr stream.
 * This function also throws the same message using throw statement, so that it can
 * terminate the cucumber process after calling cucumber "after" hooks.
 * Note: this logger is used in the child process.
 * @param {String} message error message.
 */

exports.plainLog = plainLog;

var errorLog = function errorLog(message) {
  console.error(message); // eslint-disable-line no-console

  throw message;
};

exports.errorLog = errorLog;