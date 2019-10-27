import { existsSync } from 'fs';
import { CONFIG_GROUPS, CONFIG_FILE } from '../constants';
import { logger } from './logger/logBuilder';
import {
  defaultWebdriverIOOptions,
  defaultLoggerOptions,
} from '../config/default';


const noConfigErrMsg = `No configuration file found! Please define "${CONFIG_FILE}" at root.`;


const configGroupAndDefaultMapping = (configGroup) => {
  switch (configGroup) {
    case CONFIG_GROUPS.webdriverIO: return defaultWebdriverIOOptions;
    case CONFIG_GROUPS.logger: return defaultLoggerOptions;
    default:
      return undefined;
  }
};


const loadConfigIfUndefined = (configGroup) => {
  let configFromOptimusrc;
  let returnConfigGroupObj;

  if (existsSync(CONFIG_FILE)) {
    configFromOptimusrc = require(CONFIG_FILE); // eslint-disable-line
  } else {
    logger.error(noConfigErrMsg);
    throw new Error(noConfigErrMsg);
  }

  // Verify optimusrc has requested config group object defined.
  const isRequestedConfigGroupDefined = Object
    .prototype
    .hasOwnProperty
    .call(configFromOptimusrc, configGroup);

  // Get default value of the config group
  const defaultOptions = configGroupAndDefaultMapping(configGroup);

  // If requested config group is not defined in optimusrc, return default config values.
  if (!isRequestedConfigGroupDefined) {
    returnConfigGroupObj = defaultOptions;
  } else {
    // Overriding default configuration with "optimusrc.js" configuration
    returnConfigGroupObj = {
      ...defaultOptions,
      ...configFromOptimusrc[configGroup],
    };
  }

  // Config are loaded in global object.
  global[configGroup] = { ...returnConfigGroupObj };

  return returnConfigGroupObj;
};


export default (configGroup) => {
  // Verify requested CONFIG_GROUP is already loaded.
  const isRequestedConfigGroupLoaded = Object
    .prototype
    .hasOwnProperty
    .call(global, configGroup);

  // If loaded do nothing and return the loaded value.
  if (isRequestedConfigGroupLoaded) return global.configGroup;

  // Else config is loaded using "loadConfigIfUndefined()" function and return
  return loadConfigIfUndefined(configGroup);
};
