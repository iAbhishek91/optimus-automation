import config from '../config';
import selectByAttribute from './selectByAttribute';

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
