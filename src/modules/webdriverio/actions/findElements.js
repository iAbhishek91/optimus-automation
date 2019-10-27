import config from '../../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);


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
