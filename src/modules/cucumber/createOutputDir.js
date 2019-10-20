import path from 'path';
import fs from 'fs';
import { CONFIG_GROUPS } from '../../constants';
import mkdir from '../../utility/mkdir';

export default (options) => {
  const { outputDir } = options[CONFIG_GROUPS.framework];
  const outputDirAbsPath = path.resolve(process.cwd(), outputDir);

  if (fs.existsSync(outputDirAbsPath)) return;

  mkdir(outputDirAbsPath);
};
