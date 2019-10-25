import { makeHTTPRequest as request } from './makeHttpRequest';


const getStatus = async (uri, headers, body) => (await request(uri, headers, body)).statusCode;

const getBody = async (uri, headers, body) => (await request(uri, headers, body)).body;

const getHeaders = async (uri, headers, body) => (await request(uri, headers, body)).headers;

export { getBody, getStatus, getHeaders };
