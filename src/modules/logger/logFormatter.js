import { format } from 'winston';
import {
  LOG_LEVELS,
  ANSI_RESET,
  ANSI_BRIGHT_BLACK,
} from './constants';


const { printf } = format;
const { colors, bgColors } = LOG_LEVELS;


const _formatLevel = (level) => {
  switch (level) {
    case 'info': return `${bgColors.info}${level.toUpperCase()}${ANSI_RESET}`;
    case 'warn': return `${bgColors.warn}${level.toUpperCase()}${ANSI_RESET}`;
    case 'error': return `${bgColors.error}${level.toUpperCase()}${ANSI_RESET}`;
    case 'data': return `${bgColors.data}${level.toUpperCase()}${ANSI_RESET}`;
    case 'success': return `${bgColors.success}${level.toUpperCase()}${ANSI_RESET}`;
    default: return level.toUpperCase();
  }
};
const _formatMessage = (level, message) => {
  switch (level) {
    case 'info': return `${colors.info}${message}${ANSI_RESET}`;
    case 'warn': return `${colors.warn}${message}${ANSI_RESET}`;
    case 'error': return `${colors.error}${message}${ANSI_RESET}`;
    case 'data': return `${colors.data}${message}${ANSI_RESET}`;
    case 'success': return `${colors.success}${message}${ANSI_RESET}`;
    default: return message;
  }
};


export const loggerFormat = printf(
  ({
    timestamp,
    label,
    level,
    message,
  }) => {
    const formattedMessage = _formatMessage(level, message);
    const formattedTimestamp = `${ANSI_BRIGHT_BLACK}${timestamp}${ANSI_RESET}`;

    let formattedLogger = `${_formatLevel(level)} : ${formattedMessage}`;

    if (label) {
      const formattedLabel = `${ANSI_BRIGHT_BLACK}${label}${ANSI_RESET}`;
      formattedLogger = `${_formatLevel(level)} ${formattedLabel}: ${formattedMessage}`;
    }

    return `${formattedTimestamp} ${formattedLogger}`;
  },
);


export const plainLoggerFormat = printf(
  ({ message }) => message,
);
