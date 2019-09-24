import { errorLog } from '../../logger';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locator, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locator);
    await webElement.waitForExist(timeout);
    await webElement.click();
  } catch (error) {
    errorLog(`Error occurred while performing click on ${locator}`);
  }
};
