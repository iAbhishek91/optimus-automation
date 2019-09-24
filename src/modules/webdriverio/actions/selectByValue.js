import selectByAttribute from './selectByAttribute';
import config from '../config';

const {
  defaultWaitForElementToExistsInMs,
} = config();

export default async (
  locator,
  value,
  timeout = defaultWaitForElementToExistsInMs,
) => {
  await selectByAttribute(locator, 'value', value, timeout);
};
