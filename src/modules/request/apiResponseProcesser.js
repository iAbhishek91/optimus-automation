import request from './makeHttpRequest';

export default class {
  constructor() {
    this.request = request;
  }

  async getStatus(uri, headers, body) {
    return (await this.request(uri, headers, body)).statusCode;
  }

  async getBody(uri, headers, body) {
    return (await this.request(uri, headers, body)).body;
  }

  async getHeaders(uri, headers, body) {
    return (await this.request(uri, headers, body)).headers;
  }
}

// export const getStatus = async (
//   uri,
//   headers,
//   body,
// ) => (await request(uri, headers, body)).statusCode;


// export const getBody = async (uri, headers, body) => (await request(uri, headers, body)).body;


// export const getHeaders = async (
//   uri,
//   headers,
//   body,
// ) => (await request(uri, headers, body)).headers;
