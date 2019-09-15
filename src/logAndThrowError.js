import { logger } from './modules/logger';

export default (errMsg) => {
  logger.error(errMsg);
  throw new Error(errMsg);
};
