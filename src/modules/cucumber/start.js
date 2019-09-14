import { spawn } from 'cross-spawn';
import path from 'path';
import getCucumberOptions from './getCucumberOptions';
import { logger } from '../logger';

const cucumber = path.join('node_modules', '.bin', 'cucumber-js');

export default (options) => {
  const cucumberOptions = getCucumberOptions(options);

  logger.data(
    `\nCUCUMBER OPTIONS:
    ${cucumberOptions}`,
  );

  return spawn(cucumber, [...cucumberOptions], { options });
};
