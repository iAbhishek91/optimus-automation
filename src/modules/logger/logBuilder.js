import {
  createLogger,
  format,
  transports,
} from 'winston';
import { LOG_LEVELS } from './constants';
import { loggerFormat, plainLoggerFormat } from './logFormatter';


const { combine } = format;
const { levels } = LOG_LEVELS;


// Used only internally within this project
export const logger = createLogger({
  levels,
  format: combine(
    format.label({ label: 'optimus-automation' }),
    format.timestamp({ format: 'MMM-DD HH:mm:ss' }),
    loggerFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});


// This logger is used in the child process.
export const childProcessLog = createLogger({
  format: combine(
    plainLoggerFormat,
  ),
  transports: new transports.Console(),
});


/**
 * @description console.error writes to process.stderr stream.
 * This function also throws the same message using throw statement, so that it can
 * terminate the cucumber process after calling cucumber "after" hooks.
 * Note: this logger is used in the child process.
 * @param {String} message error message.
 */
export const errorLog = (message) => {
  console.error(message);// eslint-disable-line no-console
  throw message;
};
