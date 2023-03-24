import { isValid } from './isValid';
import { MoneyInput } from '../types';

export const formatMoney = (
  input: MoneyInput,
  includeDollarSign = true
): string => {
  if (!isValid(input)) return '0.00';
  input = input.toString();
  const pos = input.indexOf('.');
  //return is there is no decimal
  if (pos < 0) return input;
  const left = input.substring(0, pos);
  let right = input.substring(pos + 1);
  if (right.length === 1) {
    right = right + '0';
  }
  if (right.length > 2) {
    right = right.substring(0, 2);
  }
  if (left.length === 0) {
    return `.${right}`;
  }
  if (includeDollarSign) {
    return `$${left}.${right}`;
  } else {
    return `${left}.${right}`;
  }
};
