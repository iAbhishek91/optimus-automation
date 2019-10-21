import commandLineArgs from 'command-line-args';
import { existsSync } from 'fs';
import parseSeleniumConfig from '../config/parseSeleniumConfig';
import logAndThrowError from '../logAndThrowError';
import seleniumInstall from '../modules/selenium-standalone/install';
import { CONFIG_FILE } from '../constants';

let optionDefinitions;

const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

export default (argv) => {
  if (existsSync(CONFIG_FILE)) {
    const config = require(CONFIG_FILE); // eslint-disable-line

    optionDefinitions = parseSeleniumConfig(config);
  } else {
    logAndThrowError(noConfigErrMsg);
  }

  try {
    /*
      Why { argv: [] } is passed as argument?

      > "commandLineArgs" function take an optional object argument.
      > Each time, by default it processes the process.argv,
      along with options mentioned by "-" or "--".
      > Since we have already processed main command in bin/optimus.js file,
      we are explicitly configuring argv arguments which were _unknown after first processing.
    */
    const options = commandLineArgs(optionDefinitions, { argv });

    seleniumInstall(options);
  } catch (error) {
    logAndThrowError(error);
  }
};
