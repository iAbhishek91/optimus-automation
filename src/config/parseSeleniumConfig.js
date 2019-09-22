import {
  defaultSeleniumOptions,
} from './default';
import { CONFIG_GROUPS } from '../constants';


const transformToCliArgObj = (name, defaultValue, group) => ({ name, defaultValue, group });


export default (config) => {
  const isSeleniumDefined = Object.prototype.hasOwnProperty.call(config, CONFIG_GROUPS.selenium);

  // if selenium options are not passed, then default seleniumOptions are not configured.
  if (!isSeleniumDefined) return [];

  const seleniumOptionDefinitions = [];
  const { seleniumOptions } = config;

  // push options required to download selenium-standalone
  seleniumOptionDefinitions.push(
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
    seleniumOptionDefinitions.push(
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
    seleniumOptionDefinitions.push(
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
    seleniumOptionDefinitions.push(
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
    seleniumOptionDefinitions.push(
      transformToCliArgObj(
        'edgeVersion',
        seleniumOptions.edgeVersion,
        CONFIG_GROUPS.selenium,
      ),
    );
  }

  return seleniumOptionDefinitions;
};
