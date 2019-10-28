import config from '../../config';
import { errorLog, childProcessLog as logger } from '../../logger/logBuilder';
import { actionLogTemplate } from '../../logger/logTemplates';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);


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
