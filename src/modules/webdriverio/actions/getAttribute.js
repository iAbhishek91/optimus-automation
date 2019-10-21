import config from '../config';
import { errorLog, plainLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locater, attributeName, timeout = defaultWaitForElementToExistsInMs) => {
  let attributeValue;

  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    attributeValue = await webElement.getAttribute(attributeName);

    logger.info(actionLogTemplate('getAttribute', locater, attributeName, attributeValue));
  } catch (error) {
    errorLog(`Error occurred while performing getAttribute: ${error.message}`);
  }

  return attributeValue;
};
