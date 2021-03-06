import { logger } from './modules/logger/logBuilder';

export default (errMsg) => {
  logger.error(errMsg);
  throw new Error(errMsg);
};
