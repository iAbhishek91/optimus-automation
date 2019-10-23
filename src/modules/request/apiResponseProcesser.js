import request from '.';


export const getStatus = async (
  uri,
  headers,
  body,
) => (await request(uri, headers, body)).statusCode;


export const getBody = async (uri, headers, body) => (await request(uri, headers, body)).body;


export const getHeaders = async (
  uri,
  headers,
  body,
) => (await request(uri, headers, body)).headers;
