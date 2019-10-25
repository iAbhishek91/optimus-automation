import config from '../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';

const {
  defaultWaitForElementToExistsInMs,
} = config();


export default async (locater, attribute, value, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    await webElement.selectByAttribute(attribute, value);

    logger.info(actionLogTemplate('selectByAttribute', locater, attribute, value));
  } catch (error) {
    errorLog(`Error occurred while performing selectByAttribute: ${error.message}`);
  }
};
