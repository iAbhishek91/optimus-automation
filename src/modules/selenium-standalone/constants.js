/* eslint-disable max-len */

const NEXUS_BINARIES_URL = 'http://nexus.sandbox.extranet.group/nexus/content/repositories/binaries';

export const SELENIUM_STANDALONE_BASE_URL = `${NEXUS_BINARIES_URL}/selenium`;

export const SELENIUM_STANDALONE_VERSION = '3.8.1';

export const CHROMEDRIVER_BASE_URL = `${NEXUS_BINARIES_URL}/chromedriver`;

export const CHROMEDRIVER_VERSION = '2.40';

export const FIREFOX_BASE_URL = `${NEXUS_BINARIES_URL}/geckodriver`;

export const FIREFOX_VERSION = '0.18.0';

export const IE_BASE_URL = SELENIUM_STANDALONE_BASE_URL;

export const IE_VERSION = '3.5.1';
