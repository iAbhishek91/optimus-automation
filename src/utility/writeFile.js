import fs from 'fs';
import { logger } from '../modules/logger';

export default (fileName, data) => {
  fs.writeFile(
    fileName, data,
    (error) => {
      if (error) throw error;

      logger.info(`File written at ${fileName}`);
    },
  );
};
