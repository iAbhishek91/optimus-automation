#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const startTest = require('../dist/cli/start-test').default;
const report = require('../dist/cli/report').default;
const seleniumInstall = require('../dist/cli/selenium-install').default;
const seleniumStart = require('../dist/cli/selenium-start').default;
const { validCommands, usageDefinition } = require('../dist/cli/cliUsageDefinitions');
const { logger } = require('../dist/modules/logger');
const logAndThrowError = require('../dist/logAndThrowError').default;

/*
  How the below object is created?

  > "name" is the name of the command.
  > "defaultOption" which are not considered by optionDefinitions.
  > Refer the below URL for official documentation from command-line-arg.
  URL: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md
*/
const mainDefinitions = [
  { name: 'command', defaultOption: true },
];

let mainOptions;

/*
  This below function is IIFE.
  > Refer: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/
(function optimus() {
  const usage = commandLineUsage(usageDefinition);

  try {
    mainOptions = commandLineArgs(mainDefinitions);
  } catch (error) {
    logger.error(error);
    logger.info(usage);
  }

  switch (mainOptions.command) {
    case validCommands.startTest:
      startTest();
      break;

    case validCommands.report:
      report();
      break;

    case validCommands.seleniumInstall:
      seleniumInstall();
      break;

    case validCommands.seleniumStart:
      seleniumStart();
      break;

    case validCommands.help:
    default: logger.info(usage);
  }
}());
