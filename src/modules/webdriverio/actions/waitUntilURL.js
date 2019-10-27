import config from '../../config';
import { CONFIG_GROUPS } from '../../../constants';

const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);

export default async (pagePathName, timeout = defaultWaitForElementToExistsInMs) => {
  try {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes(pagePathName),
      timeout,
    );

    return true;
  } catch (error) {
    return false;
  }
};
