import config from '../../config';
import selectByAttribute from './selectByAttribute';
import { CONFIG_GROUPS } from '../../../constants';


const {
  defaultWaitForElementToExistsInMs,
} = config(CONFIG_GROUPS.webdriverIO);

export default async (
  locator,
  value,
  timeout = defaultWaitForElementToExistsInMs,
) => {
  await selectByAttribute(locator, 'value', value, timeout);
};
