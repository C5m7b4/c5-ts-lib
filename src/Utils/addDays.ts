import { FormatDateType } from '../types';
import { isValid } from './isValid';

export const addDays = (date: FormatDateType, days: number) => {
  if (!isValid(date)) {
    return new Date();
  }

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
