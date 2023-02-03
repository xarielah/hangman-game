/**
 * Gets a numeric value, if it's single char,
 * return the value as number prefixed with zero.
 * @param number number
 * @returns string
 */
export function normalizeNumberString(number: number): string {
  if (number < 10) return `0${number}`;
  else return number + "";
}

/**
 * Gets minutes and seconds and return a timer-like
 * value as {minutes}:{seconds}
 * @param minutes number
 * @param seconds number
 * @returns string
 */

export function getTimerFormat(minutes: number, seconds: number): string {
  return `${normalizeNumberString(minutes)}:${normalizeNumberString(seconds)}`;
}
