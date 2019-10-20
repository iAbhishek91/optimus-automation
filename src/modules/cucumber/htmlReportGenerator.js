import reporter from 'cucumber-html-reporter';
import path from 'path';
import { logger } from '../logger';
import { formattedTimezone } from '../../utility/date';


export default (isReportsPersistent, outputDir, reportName) => {
  const jsonOutputPath = path.join(process.cwd(), outputDir, `${reportName}.json`);
  const cucumberHtmlReportPath = path.join(
    process.cwd(),
    outputDir,
    isReportsPersistent ? `${reportName}.html` : `${reportName}-${formattedTimezone()}.html`,
  );

  const options = {
    theme: 'bootstrap',
    jsonFile: jsonOutputPath,
    output: cucumberHtmlReportPath,
    reportSuiteAsScenario: true,
    launchReport: false,
  };

  logger.info('Generting cucumber HTML report...');

  reporter.generate(options, (error) => {
    if (error) {
      logger.error(error);
      process.exit(1);
    }

    logger.success(`Cucumber HTML report is generated successfully at ${options.output}.`);
  });
};
