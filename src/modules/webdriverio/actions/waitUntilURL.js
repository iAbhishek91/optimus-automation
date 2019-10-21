import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

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
