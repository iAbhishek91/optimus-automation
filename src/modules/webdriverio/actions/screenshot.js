import path from 'path';
import fs from 'fs';
import { errorLog } from '../../logger';
import { formattedTimezone } from '../../../utility/date';


/**
 * @description used to take and save screenshot of browser viewport.
 * @param {String} filename
 * @param {String} dirName
 * @param {Boolean} appendTimestamp defaults to true
 * @return final file pathname.
 */
export const saveScreenshot = async (filename, dirName, appendTimestamp = true) => {
  const timezone = appendTimestamp ? formattedTimezone() : '';

  const filePath = path.resolve(
    dirName,
    `${filename}${timezone}.png`,
  );

  try {
    await browser.saveScreenshot(filePath);
  } catch (error) {
    errorLog(`Error occurred in "actions.saveScreenshot" function! ${error.message}`);
  }

  return filePath;
};

/**
 * This function is to be called from cucumber step definition.
 * The screenshot is attached in the cucumber report.
 * Cucumber's "attach" function is used.
 * Example of usage: "await actions.attachScreenshot.call(this, 'some text');"
 * @param {String} filename
 * @param {String} dirPath
 */
// eslint-disable-next-line func-names
export const attachScreenshot = async function (filename, dirPath) {
  const filePath = await saveScreenshot(filename, dirPath);
  const data = fs.readFileSync(filePath);

  this.attach(data, 'image/png');
};
