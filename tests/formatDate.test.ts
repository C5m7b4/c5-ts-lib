import { formatDate } from '../src';

describe('formatDate tests', () => {
  test('should return an empty string if the value is null or undefined', () => {
    // @ts-ignore
    expect(formatDate(null)).toBe('');
    // @ts-ignore
    expect(formatDate(undefined)).toBe('');
    // @ts-ignore
    expect(formatDate()).toBe('');
  });

  test("should return '1/1/2023' if a date object is passed in", () => {
    expect(formatDate(new Date('1/1/2023'))).toBe('1/1/2023');
  });

  test("should return '1/1/2023' if a date with a time is present", () => {
    expect(formatDate('1/1/2023 2:00 PM')).toEqual('1/1/2023');
  });

  test('should return an empty string when an invalid date is passed in', () => {
    expect(formatDate(new Date('1/41/2020'))).toBe('');
  });
});
