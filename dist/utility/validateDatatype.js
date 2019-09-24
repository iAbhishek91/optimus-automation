"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = exports.isNotUndefined = exports.isUndefined = void 0;

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

exports.isUndefined = isUndefined;

var isNotUndefined = function isNotUndefined(value) {
  return typeof value !== 'undefined';
};

exports.isNotUndefined = isNotUndefined;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

exports.isBoolean = isBoolean;