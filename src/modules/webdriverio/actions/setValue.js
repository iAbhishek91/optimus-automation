import config from '../../config';
import { errorLog, childProcessLog as logger } from '../../logger/logBuilder';
import { actionLogTemplate } from '../../logger/logTemplates';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);


export default async (locater, value, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    await webElement.setValue(value);

    logger.info(actionLogTemplate('setValue', locater, undefined, value));
  } catch (error) {
    errorLog(`Error occurred while performing setValue: ${error.message}`);
  }
};
