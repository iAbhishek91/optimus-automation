import * as loggers from './modules/logger';
import actionLib from './modules/webdriverio/actions';
import request from './modules/request';
import * as apiResponseProcesser from './modules/request/apiResponseProcesser';
import utilityLib from './utility';

export const actions = { ...actionLib };

export const logger = { ...loggers };

export const requestProcessor = { ...apiResponseProcesser };

export const utilities = { ...utilityLib };

export {
  request,
};
