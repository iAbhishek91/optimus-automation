import {
  defaultSeleniumOptions,
} from './default';
import { CONFIG_GROUPS } from '../constants';


/**
 * @description Transform the inputs into "command-line-args" compatible object.
 * @param {String} name name of the CLI option
 * @param {*} defaultValue default value of the option if not configured from CLI.
 * @returns "command-line-args" compatible object.
 */
const transformToCliArgObj = (name, defaultValue) => ({
  name,
  defaultValue,
  group: CONFIG_GROUPS.selenium,
});


/**
 * @description To install or start "selenium-standalone". The configuration required,
 * are passed from "optimusrc.js" file, else will set to default. Then all the
 * configurations are re-structured to be compatible with "command-line-args". This will
 * enable user to pass configuration value from CLI.
 * @param {Object} config Object from "optimusrc.js", should be defined in the dependent project.
 * @returns Array consisting of all the configuration required by "selenium-standalone".
 * Each element of the return array is an compatible "command-line-arg" Object.
 */
export default (configFromOptimusrc) => {
  // validate if user wish to use selenium or not.
  const isSeleniumDefined = Object
    .prototype
    .hasOwnProperty
    .call(configFromOptimusrc, CONFIG_GROUPS.selenium);

  // if selenium options are not passed, then default seleniumOptions are not configured.
  if (!isSeleniumDefined) return [];

  const seleniumOptionDefinitions = [];

  // configuration passed from "optimusrc.js"
  const { seleniumOptions } = configFromOptimusrc;

  // push options required to download selenium-standalone
  seleniumOptionDefinitions.push(
    transformToCliArgObj(
      'seleniumBaseURL',
      seleniumOptions.seleniumBaseURL || defaultSeleniumOptions.seleniumBaseURL,
    ),
    transformToCliArgObj(
      'seleniumVersion',
      seleniumOptions.seleniumVersion || defaultSeleniumOptions.seleniumVersion,
    ),
  );

  // validate list of browser user want to use. By default all the browser will not be loaded.
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
      ),
      transformToCliArgObj(
        'chromeVersion',
        seleniumOptions.chromeVersion,
      ),
    );
  }

  // push options required to download ieDriver
  if (isIeDefined) {
    seleniumOptionDefinitions.push(
      transformToCliArgObj(
        'ieBaseURL',
        seleniumOptions.ieBaseURL || defaultSeleniumOptions.ieBaseURL,
      ),
      transformToCliArgObj(
        'ieVersion',
        seleniumOptions.ieVersion,
      ),
    );
  }

  // push options required to download firefoxDriver
  if (isFirefoxDefined) {
    seleniumOptionDefinitions.push(
      transformToCliArgObj(
        'firefoxBaseURL',
        seleniumOptions.firefoxBaseURL || defaultSeleniumOptions.firefoxBaseURL,
      ),
      transformToCliArgObj(
        'firefoxVersion',
        seleniumOptions.firefoxVersion,
      ),
    );
  }

  // push options required to download edgeDriver
  if (isEdgeDefined) {
    seleniumOptionDefinitions.push(
      transformToCliArgObj(
        'edgeVersion',
        seleniumOptions.edgeVersion,
      ),
    );
  }

  // "seleniumOptionDefinitions" is an array of command-line-arg compatible objects.
  // Refer the below URL for official documentation from command-line-arg object.
  // URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md
  return seleniumOptionDefinitions;
};
