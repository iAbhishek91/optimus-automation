import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseConfig from '../config/parseConfig';
import logAndThrowError from '../logAndThrowError';
import htmlReportGenerator from '../support/cucumber/htmlReportGenerator';
import { CONFIG_FILE, CONFIG_GROUPS } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

if (existsSync(CONFIG_FILE)) {
  const config = require(CONFIG_FILE); // eslint-disable-line

  optionDefinitions = parseConfig(config);
} else {
  logAndThrowError(noConfigErrMsg);
}

try {
  const options = commandLineArgs(optionDefinitions);

  const { isReportsPersistent, outputDir } = options[CONFIG_GROUPS.framework];
  htmlReportGenerator(
    isReportsPersistent,
    outputDir,
    options[CONFIG_GROUPS.cucumber].reportName,
  );
} catch (error) {
  logAndThrowError(error);
}
