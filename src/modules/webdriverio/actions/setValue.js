import { errorLog } from '../../logger';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locater, value, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    await webElement.setValue(value);
  } catch (error) {
    errorLog(`Error occurred while performing setValue on ${locater}`);
  }
};
