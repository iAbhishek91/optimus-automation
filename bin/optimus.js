#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const startTest = require('../dist/cli/start-test').default;
const report = require('../dist/cli/report').default;
const seleniumInstall = require('../dist/cli/selenium-install').default;
const seleniumStart = require('../dist/cli/selenium-start').default;
const { validCommands, usageDefinition } = require('../dist/cli/cliUsageDefinitions');
const { logger } = require('../dist/modules/logger');

/*
  How the below object is created?

  > "name" is the name of the command.
  > "defaultOption" which are not considered by optionDefinitions, ie options without "-" or "--"".
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
  let argv;

  try {
    // stopAtFirstUnknown parameter makes multiple invocation or processing of commandLineArgs.
    // All the command line argument which are not defined are grouped under "_unknown" group
    // "_unknown" group are used to processing command line args at first invocation.
    // Without "{ stopAtFirstUnknown: true }", command-line-args module will throw error,
    // UNKNOWN_VALUE when unknown parameter are not defined properly in optionsDefinitions.
    mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });

    // The argv variable will contain array of elements,
    // which are not processed by first command line args.
    // These _unkown arguments will be passed to downstream,
    // so that it can be processed by later command line args.
    argv = mainOptions._unknown || [];
  } catch (error) {
    logger.error(error);
    logger.info(usage);
    throw new Error(error);
  }

  switch (mainOptions.command) {
    case validCommands.startTest:
      startTest(argv);
      break;

    case validCommands.report:
      report(argv);
      break;

    case validCommands.seleniumInstall:
      seleniumInstall(argv);
      break;

    case validCommands.seleniumStart:
      seleniumStart(argv);
      break;

    case validCommands.help:
    default: logger.info(usage);
  }
}());
