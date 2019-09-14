import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseSeleniumConfig from '../config/parseSeleniumConfig';
import logAndThrowError from '../logAndThrowError';
import seleniumInstall from '../modules/selenium-standalone/install';
import { CONFIG_FILE } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

if (existsSync(CONFIG_FILE)) {
  const config = require(CONFIG_FILE); // eslint-disable-line

  optionDefinitions = parseSeleniumConfig(config);
} else {
  logAndThrowError(noConfigErrMsg);
}

try {
  const options = commandLineArgs(optionDefinitions);

  seleniumInstall(options);
} catch (error) {
  logAndThrowError(error);
}
