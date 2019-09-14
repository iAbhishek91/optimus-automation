import {
  defaultFrameworkOptions,
  defaultCucumberOptions,
} from './default';

export default (config) => {
  const {
    frameworkOptions: { outputDir, isReportsPersistent },
    cucumberOptions: { reportName },
  } = config;

  const {
    outputDir: defaultOutputDir,
    isReportsPersistent: defaultIsReportPersistent,
  } = defaultFrameworkOptions;

  const { reportName: defaultReportName } = defaultCucumberOptions;


  return [
    {
      name: 'outputDir',
      defaultValue: outputDir || defaultOutputDir,
    }, {
      name: 'isReportsPersistent',
      defaultValue: isReportsPersistent || defaultIsReportPersistent,
    }, {
      name: 'reportName',
      defaultValue: reportName || defaultReportName,
    },
  ];
};
