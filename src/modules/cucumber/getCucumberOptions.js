import path from 'path';
import { IS_YN, CONFIG_GROUPS } from '../../constants';

export default (options) => {
  const {
    featureRootDir,
    featurePath,
    featureFilename,
    require,
    format,
    reportName,
    tags,
    parallel,
  } = options[CONFIG_GROUPS.cucumber];
  const { outputDir } = options[CONFIG_GROUPS.framework];

  const cucumberOptions = [
    path.join(featureRootDir, featurePath, `${featureFilename}.feature`),
    '--require', require,
    '-f', `${format}:${path.join(outputDir, `${reportName}.json`)}`,
  ];

  if (tags) cucumberOptions.push('--tags', tags);

  if (parallel !== IS_YN.N) cucumberOptions.push('--parallel', parallel);

  return cucumberOptions;
};
