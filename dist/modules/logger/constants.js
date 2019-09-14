"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_DIRECTORY_NAME = exports.LOG_LEVELS = exports.ANSI_BG_GREEN = exports.ANSI_BG_BRIGHT_YELLOW = exports.ANSI_BG_YELLOW = exports.ANSI_BG_RED = exports.ANSI_BG_CYAN = exports.ANSI_GREEN = exports.ANSI_BRIGHT_YELLOW = exports.ANSI_YELLOW = exports.ANSI_RED = exports.ANSI_CYAN = exports.ANSI_BRIGHT_BLACK = exports.ANSI_RESET = void 0;
var ANSI_RESET = "\x1B[0m";
exports.ANSI_RESET = ANSI_RESET;
var ANSI_BRIGHT_BLACK = "\x1B[90m";
exports.ANSI_BRIGHT_BLACK = ANSI_BRIGHT_BLACK;
var ANSI_CYAN = "\x1B[36m";
exports.ANSI_CYAN = ANSI_CYAN;
var ANSI_RED = "\x1B[91m";
exports.ANSI_RED = ANSI_RED;
var ANSI_YELLOW = "\x1B[33m";
exports.ANSI_YELLOW = ANSI_YELLOW;
var ANSI_BRIGHT_YELLOW = "\x1B[93m";
exports.ANSI_BRIGHT_YELLOW = ANSI_BRIGHT_YELLOW;
var ANSI_GREEN = "\x1B[32m";
exports.ANSI_GREEN = ANSI_GREEN;
var ANSI_BG_CYAN = "\x1B[46m";
exports.ANSI_BG_CYAN = ANSI_BG_CYAN;
var ANSI_BG_RED = "\x1B[41m";
exports.ANSI_BG_RED = ANSI_BG_RED;
var ANSI_BG_YELLOW = "\x1B[43m";
exports.ANSI_BG_YELLOW = ANSI_BG_YELLOW;
var ANSI_BG_BRIGHT_YELLOW = "\x1B[103m";
exports.ANSI_BG_BRIGHT_YELLOW = ANSI_BG_BRIGHT_YELLOW;
var ANSI_BG_GREEN = "\x1B[42m";
exports.ANSI_BG_GREEN = ANSI_BG_GREEN;
var LOG_LEVELS = {
  levels: {
    error: 0,
    warn: 1,
    success: 2,
    data: 3,
    info: 4
  },
  colors: {
    error: ANSI_RED,
    warn: ANSI_YELLOW,
    success: ANSI_GREEN,
    data: ANSI_BRIGHT_YELLOW,
    info: ANSI_CYAN
  },
  bgColors: {
    error: ANSI_BG_RED,
    warn: ANSI_BG_YELLOW,
    success: ANSI_BG_GREEN,
    data: ANSI_BRIGHT_YELLOW,
    info: ANSI_BG_CYAN
  }
};
exports.LOG_LEVELS = LOG_LEVELS;
var LOG_DIRECTORY_NAME = 'logs';
exports.LOG_DIRECTORY_NAME = LOG_DIRECTORY_NAME;