const monthName = [
  'jan', 'feb', 'mar', 'apr', 'may', 'june',
  'july', 'aug', 'sept', 'oct', 'nov', 'dec',
];

export const dateNow = () => Date.now();

export const getDateObject = (date = dateNow()) => new Date(date);

export const formattedTimezone = (dateObj = getDateObject()) => {
  const dd = dateObj.getDate();
  const mmm = monthName[dateObj.getMonth()];
  const yyyy = dateObj.getFullYear();
  const hh = dateObj.getHours();
  const MM = dateObj.getMinutes();
  const ss = dateObj.getSeconds();

  return `${dd}-${mmm}-${yyyy}-${hh}-${MM}-${ss}`;
};
