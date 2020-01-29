import path from 'path';
import {
  waitForPScanToComplete,
  waitForAScanToComplete,
  generateAlerts,
  generateReport,
  startAScan,
  setProxyChain,
  validateSiteUrl,
} from '.';
import { writeFile } from '../../utility';


// constants declaration
const OUTPUT_DIRECTORY_NAME = 'output';
const activeScanUrl = 'https://www.npmjs.com/';
const activeScanPath = '/package/zaproxy';
const activeScanEndPoint = `${activeScanUrl}${activeScanPath}`;


// does ZAP scan step by step
const startSecurityScan = async () => {
  /* eslint-disable max-len */
  const reportFileName = path.join(__dirname, '..', '..', '..', OUTPUT_DIRECTORY_NAME, 'zapReport.html');
  const alertFileName = path.join(__dirname, '..', '..', '..', OUTPUT_DIRECTORY_NAME, 'zapAlert.json');
  /*  eslint-enable max-len */

  // 1. set proxy chain
  await setProxyChain();

  // 2. wait for passive scan to complete
  await waitForPScanToComplete();

  // 3. validate the active scan URL
  await validateSiteUrl(activeScanUrl, activeScanPath);

  // 4. start active scan
  const scanId = await startAScan(activeScanEndPoint);

  // 5. wait for active scan to complete
  await waitForAScanToComplete(scanId);

  // 6. generate and write the html report in a file
  const alertsData = JSON.stringify(
    await generateAlerts(activeScanEndPoint),
  );
  writeFile(alertFileName, alertsData);

  // 7. generate and write the html report in a file
  writeFile(reportFileName, await generateReport());
};

// executing the above function
startSecurityScan();
