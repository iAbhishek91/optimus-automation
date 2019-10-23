import { spawn } from 'cross-spawn';
import path from 'path';
import getCucumberOptions from './getCucumberOptions';
import createOutputDir from './createOutputDir';
import { logger } from '../logger';

const cucumber = path.join('node_modules', '.bin', 'cucumber-js');

export default (options) => {
  const cucumberOptions = getCucumberOptions(options);

  // In case the output directory mentioned in the options is not available, it will create one.
  createOutputDir(options);

  logger.data(
    `\nCUCUMBER OPTIONS:
    ${cucumberOptions}`,
  );

  return spawn(cucumber, [...cucumberOptions], { env: options });
};
