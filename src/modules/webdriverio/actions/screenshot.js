import path from 'path';
import fs from 'fs';
import config from '../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { formattedTimezone } from '../../../utility/date';
import createDirIfNotExists from '../../createDirIfNotExists';

const {
  screenshotDirectory,
} = config();

export async function saveScreenshot(filename) {
  const timezone = formattedTimezone();

  const filePath = path.resolve(
    screenshotDirectory,
    `${filename}${timezone}.png`,
  );

  try {
    // In case the output directory mentioned in the options is not available, it will create one.
    createDirIfNotExists(screenshotDirectory);

    // Create and save screenshot on the filesystem.
    // This screenshot is taken using webdriverIO API.
    await browser.saveScreenshot(filePath);

    logger.info(`Action[saveScreenshot]: ${filePath}`);
  } catch (error) {
    errorLog(`Error occurred in "actions.saveScreenshot" function! ${error.message}`);
  }

  return filePath;
}

export async function attachScreenshot(filename) {
  const filePath = await saveScreenshot(filename);
  const screenshot = fs.readFileSync(filePath);

  this.attach(screenshot, 'image/png');
}
