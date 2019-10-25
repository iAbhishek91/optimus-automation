import config from '../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locater, timeout = defaultWaitForElementToExistsInMs) => {
  let data;

  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    data = await webElement.getText();

    logger.info(actionLogTemplate('getText', locater, undefined, data));
  } catch (error) {
    errorLog(`Error occurred while performing getText: ${error.message}`);
  }

  return data;
};
