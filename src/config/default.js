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
