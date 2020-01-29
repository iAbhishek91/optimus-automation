import { sleep } from '../../utility';

const fetchPScanStatus = async (zaproxy) => (await zaproxy.pscan.recordsToScan()).recordsToScan;


export default async (zaproxy) => {
  let pScanStatus = -1;

  while (pScanStatus !== 0) {
    await sleep(2000); // wait for 2 seconds for passive scan to complete
    pScanStatus = Number(await fetchPScanStatus(zaproxy));
  }
};
