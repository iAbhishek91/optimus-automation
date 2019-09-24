import click from './click';
import setValue from './setValue';
import getText from './getText';
import isExisting from './isExisting';
import selectByValue from './selectByValue';
import selectByAttribute from './selectByAttribute';
import url from './url';
import * as screenshot from './screenshot';

const getUrl = async () => browser.getUrl();
const refresh = async () => browser.refresh();

export default {
  ...screenshot,
  isExisting,
  click,
  setValue,
  selectByAttribute,
  selectByValue,
  getText,
  getUrl,
  refresh,
  url,
};
