import config from '../config';
import { errorLog, plainLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locater, text, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    await webElement.selectByVisibleText(text);

    logger.info(actionLogTemplate('selectByVisibleText', locater, text));
  } catch (error) {
    errorLog(`Error occurred while performing selectByVisibleText: ${error.message}`);
  }
};