import ZapClient from 'zaproxy';
import {
  generateReport as _generateReport,
  generateAlerts as _generateAlerts,
} from './generateReportsAndAlerts';
import _setProxyChain from './setProxyChain';
import _startAScan from './startAScan';
import _validateSiteUrl from './validateSiteUrl';
import _waitForAScanToComplete from './waitForAScanToComplete';
import _waitForPScanToComplete from './waitForPScanToComplete';
import config from '../config';
import { CONFIG_GROUPS } from '../../constants';

const {
  apiKey,
  proxy,
} = config(CONFIG_GROUPS.zapProxy);

const zaproxy = new ZapClient({ apiKey, proxy });


export const setProxyChain = async (
  proxyName,
  proxyPort,
  proxyAuthUsername,
  proxyAuthPassword,
) => _setProxyChain(
  zaproxy,
  proxyName,
  proxyPort,
  proxyAuthUsername,
  proxyAuthPassword,
);


export const validateSiteUrl = async (
  baseUrl,
  path,
) => _validateSiteUrl(
  zaproxy,
  baseUrl,
  path,
);

export const startAScan = async (endPoint) => _startAScan(zaproxy, endPoint);

export const waitForAScanToComplete = async (scanId) => _waitForAScanToComplete(zaproxy, scanId);

export const waitForPScanToComplete = async () => _waitForPScanToComplete(zaproxy);

export const generateAlerts = async (actvScnEndPoint) => _generateAlerts(zaproxy, actvScnEndPoint);

export const generateReport = async () => _generateReport(zaproxy);
