/*
  > This is documentation and help of command prompt.
  > Implemented using module 'command-line-usage'
  > Refer: https://github.com/75lb/command-line-usage
*/
export const validCommands = {
  startTest: 'start-test',
  report: 'report',
  seleniumInstall: 'selenium-install',
  seleniumStart: 'selenium-start',
  help: 'help',
};

export const usageDefinition = [
  {
    header: 'Optimus Automation CLI usage guide',
    content: 'Multiple module supported. Each module is supported by a CLI command.',
  }, {
    header: 'Commands List',
    content: [
      {
        name: validCommands.startTest,
        summary: 'Starts cucumber process.',
      }, {
        name: validCommands.report,
        summary: 'Generate cucumber HTML report.',
      }, {
        name: validCommands.seleniumInstall,
        summary: 'Install selenium standalone server and related browser drivers.',
      }, {
        name: validCommands.seleniumStart,
        summary: 'Start selenium standalone server locally.',
      },
    ],
  },
];
