import {
  defaultFrameworkOptions,
  defaultCucumberOptions,
} from './default';
import { CONFIG_GROUPS } from '../constants';

/**
 * @description Transform the inputs into "command-line-args" compatible object.
 * @param {String} name name of the CLI option
 * @param {*} defaultValue default value of the option if not configured from CLI.
 * @returns "command-line-args" compatible object.
 */
const transformToCliArgObj = (name, defaultValue, group) => ({ name, defaultValue, group });


/**
 * @description This function does below steps
 * 1. Set the default option value based on the config group
 * 2. Override default options object using options object passed from "optimusrc.js"
 * 3. Restructure the object to be compatible with "command-line-args"
 * @param {String} configGroup config group defines what type of configuration are you passing.
 * @param {Object} optionValues Options object passed from "optimusrc.js"
 * @return array of command-line-args compatible object
 */
const processOptionsForConfigGroup = (configGroup, optionValues) => {
  const optionDefinitions = [];

  // select default value object based on the config group
  let defaultOptionValues;
  if (configGroup === CONFIG_GROUPS.framework) defaultOptionValues = defaultFrameworkOptions;
  if (configGroup === CONFIG_GROUPS.cucumber) defaultOptionValues = defaultCucumberOptions;

  // spread optionValues passed from framework to override defaultOptionValues
  const updatedOptionValues = {
    ...defaultOptionValues,
    ...optionValues,
  };

  // restructuring to make it compatible with command-line-args
  (Object.keys(updatedOptionValues)).forEach((option) => {
    optionDefinitions.push(
      transformToCliArgObj(option, updatedOptionValues[option], configGroup),
    );
  });

  // Array of command-line-arg compatible objects.
  return optionDefinitions;
};


/**
 * @description To initialize "cucumber JS". The configuration required,
 * are passed from "optimusrc.js" file, else will set to default. Then all the
 * configurations are re-structured to be compatible with "command-line-args". This will
 * enable user to pass configuration value from CLI.
 * @param {Object} config Object from "optimusrc.js", should be defined in the dependent project.
 * @returns Array consisting of all the configuration required by "selenium-standalone".
 * Each element of the return array is an compatible "command-line-arg" Object.
 */
export default (configFromOptimusrc) => {
  const {
    customOptions,
    frameworkOptions,
    cucumberOptions,
  } = configFromOptimusrc;

  // process frameworkOptions
  const frameworkOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.framework, frameworkOptions,
  );

  // process cucumberOptions
  const cucumberOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.cucumber, cucumberOptions,
  );

  // Array of command-line-arg compatible objects.
  // Refer the below URL for official documentation from command-line-arg object.
  // URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md
  return [
    ...customOptions,
    ...frameworkOptionDefinitions,
    ...cucumberOptionDefinitions,
  ];
};
