import fs from 'fs';
import { logger } from '../modules/logger';

/**
 * @description this function creates a directory from
 * the path string. it uses path.join(__dirname, dirPath).
 * "dirPath" should be in format "dir1/dir2/dir3"
 * This function automatically joins the path based on
 * operating system used.
 * @param {String} dirPath
 */
export default async (dirPath) => {
  fs.mkdir(dirPath, { recursive: true }, (error) => {
    if (error && !error.code === 'EEXIST') throw error;

    if (error && error.code === 'EEXIST') {
      logger.info(`Directory already exists ${dirPath}!`);
      return 0;
    }

    logger.success(`Directory created at ${dirPath}.`);
    return 1;
  });
};
