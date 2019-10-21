import config from '../config';

const {
  defaultIsExistingPauseExecutionTimeoutInMs,
} = config();

export default async (locator, timeout = defaultIsExistingPauseExecutionTimeoutInMs) => {
  let doesElementExist = false;

  const webElement = await browser.$(locator);

  try {
    // waitForExist returns true if element is present within the DOM.
    // else it will throw an error.
    // refer: https://webdriver.io/docs/api/element/waitForExist.html
    await webElement.waitForExist(timeout);
  } catch (error) {
    return false;
  }

  doesElementExist = await webElement.isExisting();

  return doesElementExist;
};
