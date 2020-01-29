import { sleep } from '../../utility';

const fetchAScanStatus = async (zaproxy, scanId) => (await zaproxy.ascan.status(scanId)).status;


export default async (zaproxy, scanId) => {
  let aScanStatus = 0;

  while (aScanStatus !== 100) {
    await sleep(5000); // wait for 5 seconds for active scan to complete
    aScanStatus = Number(await fetchAScanStatus(zaproxy, scanId));
  }
};
