import config from '../../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);


export default async (locator, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locator);
    await webElement.waitForDisplayed(timeout);
    await webElement.click();

    logger.info(actionLogTemplate('click', locator));
  } catch (error) {
    errorLog(`Error occurred while performing click: ${error.message}`);
  }
};
