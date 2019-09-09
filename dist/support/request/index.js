"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("request"));

/**
 * This function is used to make any HTTP API request (REST and SOAP).
 * @param {String} uri end-point to be tested
 * @param {Object} headers headers
 * @param {String} body body as buffer|string
 * @param {String} method default to 'POST', mention any http method
 * @returns Promise, resolves to the response in javascript object format else rejects with error.
 */
var _default = function _default(uri, headers, body) {
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'POST';
  return new Promise(function (resolve, reject) {
    (0, _request["default"])({
      uri: uri,
      headers: headers,
      method: method,
      body: body
    }, function (error, response) {
      if (error) reject(error);
      resolve(response);
    });
  });
};

exports["default"] = _default;