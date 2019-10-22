import { existsSync } from 'fs';
import { CONFIG_GROUPS, CONFIG_FILE } from '../../constants';
import logAndThrowError from '../../logAndThrowError';
import { defaultWebdriverIOOptions } from '../../config/default';


const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;

export default () => {
  let configFromOptimusrc;

  if (existsSync(CONFIG_FILE)) {
    configFromOptimusrc = require(CONFIG_FILE); // eslint-disable-line
  } else {
    logAndThrowError(noConfigErrMsg);
  }

  // verify config from optimusrc has webdriverIO object.
  const isWebdriverIOOptionDefined = Object
    .prototype
    .hasOwnProperty
    .call(configFromOptimusrc, CONFIG_GROUPS.webdriverIO);

  // If webdriverIO is not defined in optimusrc, return default config values.
  if (!isWebdriverIOOptionDefined) return defaultWebdriverIOOptions;

  // overriding default configuration with "optimusrc.js" configuration
  return {
    ...defaultWebdriverIOOptions,
    ...configFromOptimusrc[CONFIG_GROUPS.webdriverIO],
  };
};
