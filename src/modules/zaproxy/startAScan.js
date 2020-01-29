import { childProcessLog as logger } from '../logger/logBuilder';

// example data
// endPoint: https://abc.co.uk/user/login'
export default async (zaproxy, endPoint) => {
  const scanId = await zaproxy.ascan.scan(endPoint, true);

  logger.info(`Active scan started with scan id: ${JSON.stringify(scanId)}`);

  return scanId;
};
