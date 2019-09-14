import {
  defaultFrameworkOptions,
  defaultCucumberOptions,
  defaultSeleniumOptions,
} from './default';
import { CONFIG_GROUPS } from '../constants';


const transformToCliArgObj = (name, defaultValue, group) => ({ name, defaultValue, group });

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

  return optionDefinitions;
};


const processSeleniumOptions = (config) => {
  const isSeleniumDefined = Object.prototype.hasOwnProperty.call(config, CONFIG_GROUPS.selenium);

  // if selenium options are not passed, then default seleniumOptions are not configured.
  if (!isSeleniumDefined) return [];

  const cucumberOptionDefinitions = [];
  const { seleniumOptions } = config;

  // push options required to download selenium-standalone
  cucumberOptionDefinitions.push(
    transformToCliArgObj(
      'seleniumBaseURL',
      seleniumOptions.seleniumBaseURL || defaultSeleniumOptions.seleniumBaseURL,
      CONFIG_GROUPS.selenium,
    ),
    transformToCliArgObj(
      'seleniumVersion',
      seleniumOptions.seleniumVersion || defaultSeleniumOptions.seleniumVersion,
      CONFIG_GROUPS.selenium,
    ),
  );

  const isChromeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'chromeVersion');
  const isIeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'ieVersion');
  const isFirefoxDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'firefoxVersion');
  const isEdgeDefined = Object.prototype.hasOwnProperty.call(seleniumOptions, 'edgeVersion');

  // push options required to download chomeDriver
  if (isChromeDefined) {
    cucumberOptionDefinitions.push(
      transformToCliArgObj(
        'chromeBaseURL',
        seleniumOptions.chromeBaseURL || defaultSeleniumOptions.chromeBaseURL,
        CONFIG_GROUPS.selenium,
      ),
      transformToCliArgObj(
        'chromeVersion',
        seleniumOptions.chromeVersion,
        CONFIG_GROUPS.selenium,
      ),
    );
  }

  // push options required to download ieDriver
  if (isIeDefined) {
    cucumberOptionDefinitions.push(
      transformToCliArgObj(
        'ieBaseURL',
        seleniumOptions.ieBaseURL || defaultSeleniumOptions.ieBaseURL,
        CONFIG_GROUPS.selenium,
      ),
      transformToCliArgObj(
        'ieVersion',
        seleniumOptions.ieVersion,
        CONFIG_GROUPS.selenium,
      ),
    );
  }

  // push options required to download firefoxDriver
  if (isFirefoxDefined) {
    cucumberOptionDefinitions.push(
      transformToCliArgObj(
        'firefoxBaseURL',
        seleniumOptions.firefoxBaseURL || defaultSeleniumOptions.firefoxBaseURL,
        CONFIG_GROUPS.selenium,
      ),
      transformToCliArgObj(
        'firefoxVersion',
        seleniumOptions.firefoxVersion,
        CONFIG_GROUPS.selenium,
      ),
    );
  }

  // push options required to download edgeDriver
  if (isEdgeDefined) {
    cucumberOptionDefinitions.push(
      transformToCliArgObj(
        'edgeVersion',
        seleniumOptions.edgeVersion,
        CONFIG_GROUPS.selenium,
      ),
    );
  }

  return cucumberOptionDefinitions;
};

export default (config) => {
  const {
    customOptions,
    frameworkOptions,
    cucumberOptions,
  } = config;

  // process frameworkOptions
  const frameworkOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.framework, frameworkOptions,
  );

  // process cucumberOptions
  const cucumberOptionDefinitions = processOptionsForConfigGroup(
    CONFIG_GROUPS.cucumber, cucumberOptions,
  );

  // process seleniumOptions
  const seleniumOptionDefinitions = processSeleniumOptions(config);

  return [
    ...customOptions,
    ...frameworkOptionDefinitions,
    ...cucumberOptionDefinitions,
    ...seleniumOptionDefinitions,
  ];
};
