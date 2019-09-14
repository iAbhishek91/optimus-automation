import path from 'path';

export const defaultFrameworkOptions = {
  outputDir: 'output',
  isReportsPersistent: false,
};

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
