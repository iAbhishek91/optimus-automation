import {
  createLogger,
  transports,
  format,
} from 'winston';
import { LOG_LEVELS } from './constants';
import { CONFIG_GROUPS } from '../../constants';
import config from '../config';
import { loggerFormat, loggerFormatNoColor } from './logFormatter';


// The below function is a IIFE which returns a winston logger object.
export const logger = (function logger() {
  const { combine } = format;
  const { levels } = LOG_LEVELS;
  const {
    label,
    logDir,
  } = config(CONFIG_GROUPS.logger);

  // Define transport based on the config
  const _transports = [];

  // Logs are saved, if directory configured in optimusrc.
  if (logDir && typeof logDir === 'string') {
    _transports.push(
      new transports.File({ filename: `${logDir}/execution.log` }),
      new transports.File({
        filename: `${logDir}/error.log`,
        level: 'error',
      }),
    );
  }

  // Define labelObj based on the config
  const labelObj = label ? { label } : undefined;

  const winstonLogger = createLogger({
    levels,
    format: combine(
      format.label(labelObj),
      format.timestamp(),
      loggerFormatNoColor,
    ),
    transports: _transports,
  });

  logger.add(new transports.Console({
    format: combine(
      format.label(labelObj),
      format.timestamp(),
      loggerFormat,
    ),
  }));

  return winstonLogger;
}());


// These functions are exported from the internal logger module.
export {
  childProcessLog,
  errorLog,
} from './logBuilder';
