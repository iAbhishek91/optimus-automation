import selenium from 'selenium-standalone';
import { logger } from '../logger/logBuilder';
import logAndThrowError from '../../logAndThrowError';

const progressCB = (totalLength, progressLength) => {
  logger.info(`Installing selenium and drivers .... (${totalLength}, ${progressLength})%`);
};


export default (seleniumOptions) => {
  const {
    arch,
    seleniumBaseURL,
    seleniumVersion,
    chromeBaseURL,
    chromeVersion,
    ieBaseURL,
    ieVersion,
    firefoxBaseURL,
    firefoxVersion,
  } = seleniumOptions;

  const chrome = {
    arch,
    version: chromeVersion,
    baseURL: chromeBaseURL,
  };

  const firefox = {
    arch,
    version: firefoxVersion,
    baseURL: firefoxBaseURL,
  };

  const ie = {
    arch,
    version: ieVersion,
    baseURL: ieBaseURL,
  };

  const options = {
    version: seleniumVersion,
    baseURL: seleniumBaseURL,
    drivers: { chrome, firefox, ie },
    logger: (message) => { logger.info(message); },
    progressCB,
  };

  selenium.install(options, (error) => {
    if (error) logAndThrowError(error);

    logger.info('Selenium standalone is installed successfully.');
  });
};
