import config from '../config';
import { errorLog, plainLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locator, timeout = defaultWaitForElementToExistsInMs) => {
  let webElements;

  try {
    webElements = await browser.$$(locator);
    await webElements[0].waitForExist(timeout);

    logger.info(actionLogTemplate('findElements', locator));
  } catch (error) {
    errorLog(`Error occurred while finding elements: ${error.message}`);
  }

  return webElements;
};
