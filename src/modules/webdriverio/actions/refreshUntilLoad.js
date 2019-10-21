import config from '../config';
import isDisplayed from './isDisplayed';

const {
  defaultPageReloadCount,
} = config();

export default async (locator, reloadCount = defaultPageReloadCount) => {
  const isElementDisplayed = false;
  let _reloadCount = reloadCount; // not mutating the argument

  while (_reloadCount > 0) {
    if (await isDisplayed(locator)) return true;

    await browser.refresh();
    _reloadCount -= 1;
  }

  return isElementDisplayed;
};
