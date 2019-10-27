export const ANSI_RESET = '\u001b[0m';
export const ANSI_BRIGHT_BLACK = '\u001b[90m';
export const ANSI_CYAN = '\u001b[36m';
export const ANSI_RED = '\u001b[91m';
export const ANSI_YELLOW = '\u001b[33m';
export const ANSI_BRIGHT_YELLOW = '\u001b[93m';
export const ANSI_GREEN = '\u001b[32m';
export const ANSI_BG_CYAN = '\u001b[46m';
export const ANSI_BG_RED = '\u001b[41m';
export const ANSI_BG_YELLOW = '\u001b[43m';
export const ANSI_BG_BRIGHT_YELLOW = '\u001b[103m';
export const ANSI_BG_GREEN = '\u001b[42m';

export const LOG_LEVELS = {
  levels: {
    error: 0,
    warn: 1,
    success: 2,
    data: 3,
    info: 4,
  },
  colors: {
    error: ANSI_RED,
    warn: ANSI_YELLOW,
    success: ANSI_GREEN,
    data: ANSI_BRIGHT_YELLOW,
    info: ANSI_CYAN,
  },
  bgColors: {
    error: ANSI_BG_RED,
    warn: ANSI_BG_YELLOW,
    success: ANSI_BG_GREEN,
    data: ANSI_BRIGHT_YELLOW,
    info: ANSI_BG_CYAN,
  },
};
