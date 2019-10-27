import config from '../../config';
import { errorLog, childProcessLog as logger } from '../../logger';
import { actionLogTemplate } from '../../logger/logTemplates';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);


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
