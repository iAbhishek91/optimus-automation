import { errorLog } from '../../logger';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locator, timeout = defaultWaitForElementToExistsInMs) => {
  let doesElementExist = false;

  const webElement = await browser.$(locator);

  try {
    await webElement.waitForExist(timeout);
  } catch (error) {
    errorLog(`Element ${locator} do not exists after ${timeout} milliseconds!`);
  }

  doesElementExist = await webElement.isExisting();

  return doesElementExist;
};
