import { errorLog } from '../../logger';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (locater, timeout = defaultWaitForElementToExistsInMs) => {
  let data;

  try {
    const webElement = await browser.$(locater);
    await webElement.waitForExist(timeout);
    data = webElement.getText();
  } catch (error) {
    errorLog(`Error occurred while performing getText on ${locater}`);
  }

  return data;
};
