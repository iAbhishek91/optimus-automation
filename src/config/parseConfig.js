import { defaultFrameworkOptions, defaultCucumberOptions } from './default';
import { CONFIG_GROUPS } from '../constants';


const processOptionsForConfigGroup = (configGroup, optionValues) => {
  const optionDefinitions = [];

  // select default value object based on the config group
  const defaultOptionValues = configGroup === CONFIG_GROUPS.framework
    ? defaultFrameworkOptions
    : defaultCucumberOptions;

  // spread optionValues passed from framework to override defaultOptionValues
  const updatedOptionValues = {
    ...defaultOptionValues,
    ...optionValues,
  };

  // restructuring to make it compatible with command-line-args
  (Object.keys(updatedOptionValues)).forEach((option) => {
    optionDefinitions.push({
      name: option,
      defaultValue: updatedOptionValues[option],
      group: configGroup,
    });
  });

  return optionDefinitions;
};


export default (config) => {
  const {
    customOptions,
    frameworkOptions,
    cucumberOptions,
  } = config;

  // Process frameworkOptions
  const frameworkOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.framework, frameworkOptions,
  );

  // validate and parse cucumber options
  const cucumberOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.cucumber, cucumberOptions,
  );

  return [
    ...customOptions,
    ...frameworkOptionDefinitions,
    ...cucumberOptionDefinitions,
  ];
};
