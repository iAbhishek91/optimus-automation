import { errorLog, childProcessLog as logger } from '../../logger/logBuilder';
import { isUndefined } from '../../../utility/validateDatatype';

export default async (appUrl, pathname = null) => {
  if (isUndefined(appUrl)) {
    errorLog(`Application URL is invalid! ${appUrl}`);
  }

  if (!pathname) {
    logger.info(`Launching URL: ${appUrl}`);

    await browser.url(appUrl);
  } else {
    const updatedUrl = appUrl + pathname;
    logger.info(`Launching URL: ${updatedUrl}`);

    await browser.url(updatedUrl);
  }
};
