import { FormatDateType } from '../types';

export const formatDate = (d: FormatDateType) => {
  if (typeof d === 'undefined') return '';
  if (d === null) return '';
  if (Object.prototype.toString.call(d) == '[object Date]') {
    // @ts-ignore
    if (isNaN(d.getTime())) {
      return '';
    }
  }

  d = d.toString();
  const date = new Date(d);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return month + '/' + day + '/' + year;
};
