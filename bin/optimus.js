#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const startTest = require('../dist/cli/start-test').default;
const report = require('../dist/cli/report').default;
const seleniumInstall = require('../dist/cli/selenium-install').default;
const seleniumStart = require('../dist/cli/selenium-start').default;
const { logger } = require('../dist/modules/logger');

const validCommands = {
  startTest: {
    name: 'start-test',
    desc: 'Starts cucumber process',
  },
  report: {
    name: 'report',
    desc: 'Generate cucumber HTML report',
  },
  seleniumInstall: {
    name: 'selenium-install',
    desc: 'Install selenium standalone server and related browser drivers',
  },
  seleniumStart: {
    name: 'selenium-start',
    desc: 'Start selenium standalone server locally',
  },
};

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

const mainOptions = commandLineArgs(mainDefinitions);

/*
  This below function is IIFE.
  > Refer: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/
(function optimus() {
  switch (mainOptions.command) {
    case validCommands.startTest.name:
      startTest();
      return 0;

    case validCommands.report.name:
      report();
      return 0;

    case validCommands.seleniumInstall.name:
      seleniumInstall();
      return 0;

    case validCommands.seleniumStart.name:
      seleniumStart();
      return 0;

    case 'help':
    default:
      logger.info(`
      cmd: optimus help
      
      Valid commands are:
        ${Object.values(validCommands).map((command) => `\n\t${command.name}: ${command.desc}`)}
      `);
      return 0;
  }
}());
