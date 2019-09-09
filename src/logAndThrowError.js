import { logger } from './support/logger';

export default (errMsg) => {
  logger.error(errMsg);
  throw new Error(errMsg);
};
