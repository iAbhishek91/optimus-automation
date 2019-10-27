import {
  createLogger,
  transports,
  format,
} from 'winston';
import { LOG_LEVELS } from './constants';
import { CONFIG_GROUPS } from '../../constants';
import config from '../config';
import { loggerFormat } from './logFormatter';


const { combine } = format;
const { levels } = LOG_LEVELS;
const {
  label,
  logDir,
} = config(CONFIG_GROUPS.logger);


export const logger = () => {
  // Define transport based on the config
  const _transports = [
    new transports.Console(),
  ];

  // Logs are saved, if directory configured in optimusrc.
  if (!logDir && typeof logDir === 'string') {
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

  return createLogger({
    levels,
    format: combine(
      format.label(labelObj),
      format.timestamp({ format: 'MMM-DD HH:mm:ss' }),
      loggerFormat,
    ),
    transports: _transports,
  });
};


// These functions are exported from the internal logger module.
export {
  childProcessLog,
  errorLog,
} from './logBuilder';
