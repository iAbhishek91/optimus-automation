/* eslint-disable max-len */

export const splitText = (string, delimiter) => string.split(delimiter);

export const splitTextAndReturnIndex = (string, delimiter, index) => (splitText(string, delimiter))[index];
