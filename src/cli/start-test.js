import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseStartTestConfig from '../config/parseStartTestConfig';
import { logger } from '../modules/logger';
import logAndThrowError from '../logAndThrowError';
import startCucumber from '../modules/cucumber/start';
import cucumberEventListener from '../modules/cucumber/eventListener';
import { CONFIG_FILE, CONFIG_GROUPS } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

export default () => {
  if (existsSync(CONFIG_FILE)) {
    const config = require(CONFIG_FILE); // eslint-disable-line

    optionDefinitions = parseStartTestConfig(config);

    logger.info(JSON.stringify(optionDefinitions));
  } else {
    logAndThrowError(noConfigErrMsg);
  }

  try {
    const options = commandLineArgs(optionDefinitions);

    logger.data(`Raw configuration: ${JSON.stringify(options)}`);

    const cucumberChildProcess = startCucumber({
      ...process.env,
      ...options,
    });

    cucumberEventListener(cucumberChildProcess, options[CONFIG_GROUPS.framework].outputDir);
  } catch (error) {
    logAndThrowError(error);
  }
};
