import path from 'path';
import fs from 'fs';
import mkdir from '../utility/mkdir';

// Note this function do not create directory recursively.
// Folder must exists before creating a sub folder.
export default (outputDir) => {
  // Generate absolute path of the directory Name
  const outputDirAbsPath = path.resolve(process.cwd(), outputDir);

  // Verify if the folder already exists, create one if not exists
  if (fs.existsSync(outputDirAbsPath)) return;

  mkdir(outputDirAbsPath);
};
