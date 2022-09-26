import { round } from 'lodash';
export const shortenAddress = (address: string, backAddress = true) => {
  const front = address.substring(0, 6);
  if (!backAddress) return front;

  return `${front}...${address.substring(address.length - 4)}`;
};

export const smartRounding = (x: number | string | undefined) => {
  const ceiling = 10;
  if (!x || Number(x) > ceiling) return numberWithCommas(x, 2);

  return numberWithCommas(x, 4);
};
/**
 * Also rounds to the nearest `precision` value, defaulting to 6
 */
export const numberWithCommas = (
  x: number | string | undefined,
  precision = 6
) => {
  if (!x) {
    if (precision > 0) {
      return '0.'.padEnd(precision + 2, '0');
    } else return '0';
  }
  // convert it to Number first to remove insignificant trailing zeroes after the decimal point
  const split = Number(x).toString().split('.');
  const [beforeDot, afterDot] = [split[0], split[1] || ''];
  const before = beforeDot.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const after =
    precision > 0
      ? '.' +
        (afterDot.length > precision
          ? String(
              round(Number.parseInt(afterDot), -(afterDot.length - precision))
            ).padStart(afterDot.length, '0')
          : afterDot
        )
          .substring(0, precision)
          .padEnd(precision, '0')
      : '';
  return before + after;
};
