import config from '../../config';
import isDisplayed from './isDisplayed';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultPageReloadCount,
} = config(CONFIG_GROUPS.webdriverIO);

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
