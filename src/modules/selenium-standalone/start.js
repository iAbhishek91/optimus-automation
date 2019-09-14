import selenium from 'selenium-standalone';
import { logger } from '../logger';
import logAndThrowError from '../../logAndThrowError';


export default (seleniumOptions) => {
  const {
    seleniumVersion,
    chromeVersion,
    ieVersion,
    firefoxVersion,
  } = seleniumOptions;

  const ie = { version: ieVersion };
  const chrome = { version: chromeVersion };
  const firefox = { version: firefoxVersion };

  const options = {
    version: seleniumVersion,
    drivers: { chrome, firefox, ie },
  };

  selenium.start(options, (error) => {
    if (error) logAndThrowError(error);

    logger.info('Selenium standalone server started.');
  });
};
