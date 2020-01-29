import { errorLog, childProcessLog as logger } from '../logger/logBuilder';

// example data
// proxyName = 'PROXY.SERVICE.GROUP';
// proxyPort = 8080;
// proxyAuthUsername = 'abhishek.das';
// proxyAuthPassword = 'Password@123';

export default async (zaproxy, proxyName, proxyPort, proxyAuthUsername, proxyAuthPassword) => {
  const enableProxyChain = await zaproxy.core.setOptionUseProxyChain(true);
  const setProxyChainName = await zaproxy.core.setOptionProxyChainName(proxyName);
  const setProxyChainPort = await zaproxy.core.setOptionProxyChainPort(proxyPort);
  const enableProxyChainAuthentication = await zaproxy.core.setOptionUseProxyChainAuth(true);
  const setProxyChainUserName = await zaproxy.core.setOptionProxyChainUserName(proxyAuthUsername);
  const setProxyChainPassword = await zaproxy.core.setOptionProxyChainPassword(proxyAuthPassword);

  if (
    enableProxyChain.Result !== 'OK'
    || setProxyChainName.Result !== 'OK'
    || setProxyChainPort.Result !== 'OK'
    || enableProxyChainAuthentication.Result !== 'OK'
    || setProxyChainUserName.Result !== 'OK'
    || setProxyChainPassword.Result !== 'OK'
  ) {
    errorLog('Error while configuring proxy chain');
  }

  logger.info('Proxy chain is configured successfully.');
};
