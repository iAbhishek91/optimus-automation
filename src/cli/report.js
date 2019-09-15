import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseReportConfig from '../config/parseReportConfig';
import logAndThrowError from '../logAndThrowError';
import htmlReportGenerator from '../modules/cucumber/htmlReportGenerator';
import { CONFIG_FILE } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

export default () => {
  if (existsSync(CONFIG_FILE)) {
    const config = require(CONFIG_FILE); // eslint-disable-line

    optionDefinitions = parseReportConfig(config);
  } else {
    logAndThrowError(noConfigErrMsg);
  }

  try {
    const {
      isReportsPersistent,
      outputDir,
      reportName,
    } = commandLineArgs(optionDefinitions);

    htmlReportGenerator(
      isReportsPersistent,
      outputDir,
      reportName,
    );
  } catch (error) {
    logAndThrowError(error);
  }
};
