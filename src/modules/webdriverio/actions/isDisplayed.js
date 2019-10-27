import config from '../../config';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultIsExistingPauseExecutionTimeoutInMs,
} = config(CONFIG_GROUPS.webdriverIO);


export default async (locator, timeout = defaultIsExistingPauseExecutionTimeoutInMs) => {
  const webElement = await browser.$(locator);
  try {
    // isDisplayed returns true if element is displayed within the DOM.
    // else it will throw an error.
    // refer: https://webdriver.io/docs/api/element/waitForDisplayed.html
    await webElement.waitForDisplayed(timeout);
    return true;
  } catch (error) {
    return false;
  }
};
