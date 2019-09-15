"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usageDefinition = exports.validCommands = void 0;

/*
  > This is documentation and help of command prompt.
  > Implemented using module 'command-line-usage'
  > Refer: https://github.com/75lb/command-line-usage
*/
var executable = 'optimus';
var validCommands = {
  startTest: 'start-test',
  report: 'report',
  seleniumInstall: 'selenium-install',
  seleniumStart: 'selenium-start',
  help: 'help'
};
exports.validCommands = validCommands;
var usageDefinition = [{
  header: 'Optimus Automation CLI usage guide',
  content: "Multiple module supported. Each module is supported by a CLI command.\n\n    CLI format: ".concat(executable, " <command> <options>")
}, {
  header: 'Commands List',
  content: [{
    name: validCommands.help,
    summary: 'To show CLI guide.'
  }, {
    name: validCommands.startTest,
    summary: 'Starts cucumber process.'
  }, {
    name: validCommands.report,
    summary: 'Generate cucumber HTML report.'
  }, {
    name: validCommands.seleniumInstall,
    summary: 'Install selenium standalone server and related browser drivers.'
  }, {
    name: validCommands.seleniumStart,
    summary: 'Start selenium standalone server locally.'
  }]
}];
exports.usageDefinition = usageDefinition;