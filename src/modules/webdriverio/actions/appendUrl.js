import url from './url';
import { splitTextAndReturnIndex } from '../../../utility';

export default async (currentUrl, basePath, pagePath, index = 0) => {
  const appUrl = splitTextAndReturnIndex(currentUrl, basePath, index);
  await url(appUrl, `${basePath}${pagePath}`);
};
