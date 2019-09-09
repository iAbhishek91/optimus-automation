"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formattedTimezone = exports.getDateObject = exports.dateNow = void 0;
var monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

var dateNow = function dateNow() {
  return Date.now();
};

exports.dateNow = dateNow;

var getDateObject = function getDateObject() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dateNow();
  return new Date(date);
};

exports.getDateObject = getDateObject;

var formattedTimezone = function formattedTimezone() {
  var dateObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDateObject();
  var dd = dateObj.getDate();
  var mmm = monthName[dateObj.getMonth()];
  var yyyy = dateObj.getFullYear();
  var hh = dateObj.getHours();
  var MM = dateObj.getMinutes();
  var ss = dateObj.getSeconds();
  return "".concat(dd, "-").concat(mmm, "-").concat(yyyy, "-").concat(hh, "-").concat(MM, "-").concat(ss);
};

exports.formattedTimezone = formattedTimezone;