import {
  createLogger,
  format,
  transports,
} from 'winston';
import {
  LOG_DIRECTORY_NAME,
  LOG_LEVELS,
  ANSI_RESET,
  ANSI_BRIGHT_BLACK,
} from './constants';


const { combine, printf } = format;

const { levels, colors, bgColors } = LOG_LEVELS;

const formatLevel = (level) => {
  switch (level) {
    case 'info': return `${bgColors.info}${level.toUpperCase()}${ANSI_RESET}`;
    case 'warn': return `${bgColors.warn}${level.toUpperCase()}${ANSI_RESET}`;
    case 'error': return `${bgColors.error}${level.toUpperCase()}${ANSI_RESET}`;
    case 'data': return `${bgColors.data}${level.toUpperCase()}${ANSI_RESET}`;
    case 'success': return `${bgColors.success}${level.toUpperCase()}${ANSI_RESET}`;
    default: return level.toUpperCase();
  }
};

const formatMessage = (level, message) => {
  switch (level) {
    case 'info': return `${colors.info}${message}${ANSI_RESET}`;
    case 'warn': return `${colors.warn}${message}${ANSI_RESET}`;
    case 'error': return `${colors.error}${message}${ANSI_RESET}`;
    case 'data': return `${colors.data}${message}${ANSI_RESET}`;
    case 'success': return `${colors.success}${message}${ANSI_RESET}`;
    default: return message;
  }
};

const loggerFormat = printf(
  ({
    timestamp,
    label,
    level,
    message,
  }) => {
    const formattedLabel = `${ANSI_BRIGHT_BLACK}${label}${ANSI_RESET}`;
    const formattedTimestamp = `${ANSI_BRIGHT_BLACK}${timestamp}${ANSI_RESET}`;
    const formattedMessage = formatMessage(level, message);

    return `${formattedTimestamp} ${formatLevel(level)} ${formattedLabel}: ${formattedMessage}`;
  },
);

const plainLoggerFormat = printf(
  ({ message }) => message,
);


export const logger = createLogger({
  levels,
  format: combine(
    format.label({ label: 'optimus-automation' }),
    format.timestamp(),
    loggerFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: `${LOG_DIRECTORY_NAME}/execution.log` }),
    new transports.File({
      filename: `${LOG_DIRECTORY_NAME}/error.log`,
      level: 'error',
    }),
  ],
});


// This logger is used in the child process.
export const plainLog = createLogger({
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
