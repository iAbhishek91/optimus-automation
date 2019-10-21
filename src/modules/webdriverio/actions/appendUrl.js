import url from './url';
import utility from '../../../utility';

export default async (currentUrl, basePath, pagePath, index = 0) => {
  const appUrl = utility.splitTextAndReturnIndex(currentUrl, basePath, index);
  await url(appUrl, `${basePath}${pagePath}`);
};
