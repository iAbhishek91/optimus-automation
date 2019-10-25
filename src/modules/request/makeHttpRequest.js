import request from 'request';

/**
 * This function is used to make any HTTP API request (REST and SOAP).
 * @param {String} uri end-point to be tested
 * @param {Object} headers headers
 * @param {String} body body as buffer|string
 * @param {String} method default to 'POST', mention any http method
 * @returns Promise, resolves to the response in javascript object format else rejects with error.
 */
// eslint-disable-next-line import/prefer-default-export
export const makeHTTPRequest = (uri, headers, body, method = 'POST') => (
  new Promise((resolve, reject) => {
    request({
      uri,
      headers,
      method,
      body,
    }, (error, response) => {
      if (error) reject(error);
      resolve(response);
    });
  })
);
