import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseStartTestConfig from '../config/parseStartTestConfig';
import { logger } from '../modules/logger/logBuilder';
import logAndThrowError from '../logAndThrowError';
import startCucumber from '../modules/cucumber/start';
import cucumberEventListener from '../modules/cucumber/eventListener';
import { CONFIG_FILE, CONFIG_GROUPS } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

export default (argv) => {
  if (existsSync(CONFIG_FILE)) {
    const config = require(CONFIG_FILE); // eslint-disable-line

    optionDefinitions = parseStartTestConfig(config);

    logger.info(JSON.stringify(optionDefinitions));
  } else {
    logAndThrowError(noConfigErrMsg);
  }

  try {
    /*
      Why { argv } is passed as argument?

      > "commandLineArgs" function take an optional object argument.
      > Each time, by default it processes the process.argv,
      along with options mentioned by "-" or "--".
      > Since we have already processed main command in bin/optimus.js file,
      we are explicitly configuring argv arguments which were _unknown after first processing.
    */
    const options = commandLineArgs(optionDefinitions, { argv });

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
