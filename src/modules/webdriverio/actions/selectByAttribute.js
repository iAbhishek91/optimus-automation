import { errorLog } from '../../logger';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locator, attribute, value, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locator);
    await webElement.waitForExist(timeout);
    await webElement.selectByAttribute(attribute, value);
  } catch (error) {
    errorLog(`Error occurred while performing selectByAttribute on ${locator}`);
  }
};
