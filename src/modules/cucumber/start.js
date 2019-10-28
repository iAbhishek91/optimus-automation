import { spawn } from 'cross-spawn';
import path from 'path';
import getCucumberOptions from './getCucumberOptions';
import createDirIfNotExists from '../createDirIfNotExists';
import { CONFIG_GROUPS } from '../../constants';
import { logger } from '../logger/logBuilder';

const cucumber = path.join('node_modules', '.bin', 'cucumber-js');

export default (options) => {
  const cucumberOptions = getCucumberOptions(options);

  // In case the output directory mentioned in the options is not available, it will create one.
  const { outputDir } = options[CONFIG_GROUPS.framework];
  createDirIfNotExists(outputDir);

  logger.data(
    `\nCUCUMBER OPTIONS:
    ${cucumberOptions}`,
  );

  return spawn(cucumber, [...cucumberOptions], { env: options });
};
