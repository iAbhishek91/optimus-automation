import { errorLog, childProcessLog as logger } from '../logger/logBuilder';
import { isUndefined } from '../../utility';

export default async (zaproxy, baseUrl, path) => {
  const siteResult = await zaproxy.core.sites();
  const isSiteAvailable = siteResult.sites.find((site) => site === baseUrl);

  if (isUndefined(isSiteAvailable)) {
    errorLog('Error: sites is unavailable for active scan');
    return 1;
  }

  const urlResult = await zaproxy.core.urls(baseUrl);
  const isUrlAvailable = urlResult.urls.find((url) => url === `${baseUrl}${path}`);

  if (isUndefined(isUrlAvailable)) {
    errorLog('Error: URL is unavailable for active scan');
    return 1;
  }

  logger.info(`${baseUrl}${path} is valid for active scan`);
  return 0;
};
