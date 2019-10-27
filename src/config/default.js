import path from 'path';

// below configuration is used by this project, user can modify these configs from optimusrc.js.
export const defaultFrameworkOptions = {
  outputDir: 'output',
  isReportsPersistent: false,
};

// below configuration is used by cucumber Options
export const defaultCucumberOptions = {
  featureRootDir: path.join(process.cwd(), 'features'),
  featurePath: '**',
  featureFilename: '*',
  reportName: 'cucumberReport',
  require: 'dist/step_definitions/',
  format: 'json',
  parallel: false,
  tags: null,
};

// below configuration is used by selenium-standalone server
export const defaultSeleniumOptions = {
  arch: process.arch,
  seleniumBaseURL: 'https://selenium-release.storage.googleapis.com',
  seleniumVersion: '3.141.5',
  chromeBaseURL: 'https://chromedriver.storage.googleapis.com',
  chromeVersion: '2.43',
  ieBaseURL: 'https://selenium-release.storage.googleapis.com',
  ieVersion: '3.14.0',
  firefoxBaseURL: 'https://github.com/mozilla/geckodriver/releases/download',
  firefoxVersion: '0.23.0',
};

// below configuration is used by webdriverIO APIs
export const defaultWebdriverIOOptions = {
  defaultWaitForElementToExistsInMs: 30 * 1000,
  defaultIsExistingPauseExecutionTimeoutInMs: 10 * 1000,
  defaultPageReloadCount: 5,
  screenshotDirectory: path.join('output', 'screenshot'),
};

// below configuration is used by logger module
export const defaultLoggerOptions = {
  label: undefined,
  logDir: 'logs',
};
