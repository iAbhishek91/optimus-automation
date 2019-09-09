"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_YN = exports.CONFIG_GROUPS = exports.CONFIG_FILE = void 0;
var CONFIG_FILE = "".concat(process.cwd(), "/.optimusrc.js");
exports.CONFIG_FILE = CONFIG_FILE;
var CONFIG_GROUPS = {
  custom: 'customOptions',
  framework: 'frameworkOptions',
  cucumber: 'cucumberOptions'
};
exports.CONFIG_GROUPS = CONFIG_GROUPS;
var IS_YN = {
  Y: 'yes',
  N: 'no'
};
exports.IS_YN = IS_YN;