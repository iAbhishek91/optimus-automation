import click from './click';
import clearValue from './clearValue';
import setValue from './setValue';
import getText from './getText';
import getAttribute from './getAttribute';
import isExisting from './isExisting';
import isDisplayed from './isDisplayed';
import selectByValue from './selectByValue';
import selectByAttribute from './selectByAttribute';
import selectByVisibleText from './selectByVisibleText';
import url from './url';
import appendUrl from './appendUrl';
import findElements from './findElements';
import waitUntilURL from './waitUntilURL';
import refreshUntilLoad from './refreshUntilLoad';
import * as screenshot from './screenshot';

const getUrl = async () => browser.getUrl();
const refresh = async () => browser.refresh();
const getElementCount = async (locator) => (await findElements(locator)).length;

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  ...screenshot,
  isExisting,
  isDisplayed,
  click,
  clearValue,
  findElements,
  getElementCount,
  setValue,
  selectByAttribute,
  selectByValue,
  selectByVisibleText,
  getAttribute,
  getText,
  getUrl,
  refresh,
  url,
  appendUrl,
  waitUntilURL,
  refreshUntilLoad,
};
