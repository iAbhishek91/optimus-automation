import * as date from './date';
import * as array from './array';
import * as string from './string';
import mkdir from './mkdir';
import sleep from './sleep';
import * as validateDatatype from './validateDatatype';
import writeFile from './writeFile';

export default {
  ...array,
  ...date,
  ...string,
  ...validateDatatype,
  mkdir,
  sleep,
  writeFile,
};
