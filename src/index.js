import * as loggers from './modules/logger';
import actionLib from './modules/webdriverio/actions';
import request from './modules/request';
import * as apiResponseProcesser from './modules/request/apiResponseProcesser';
import utilityLib from './utility';

export const {
  saveScreenshot,
  attachScreenshot,
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
} = actionLib;

export const {
  logger,
  plainLog,
  errorLog,
} = loggers;

export const {
  getBody,
  getHeaders,
  getStatus,
} = apiResponseProcesser;

export const {
  mkdir,
  sleep,
  writeFile,
  removeEmptyElements,
  convertArrayToUpperCase,
  dateNow,
  getDateObject,
  formattedTimezone,
  splitText,
  splitTextAndReturnIndex,
  isUndefined,
  isNotUndefined,
  isBoolean,
} = utilityLib;

export {
  request,
};
