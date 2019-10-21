import path from 'path';
import fs from 'fs';
import config from '../config';
import { errorLog, plainLog as logger } from '../../logger';
import { formattedTimezone } from '../../../utility/date';

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
    await browser.saveScreenshot(filePath);

    logger.info(`Action[saveScreenshot]: ${filePath}`);
  } catch (error) {
    errorLog(`Error occurred in "actions.saveScreenshot" function! ${error.message}`);
  }

  return filePath;
}

export async function attachScreenshot(filename) {
  const filePath = await saveScreenshot(filename);
  const data = fs.readFileSync(filePath);

  this.attach(data, 'image/png');
}
