import { isValid } from '../src';

describe('isValid tests', () => {
  test('should return false for undefined values', () => {
    expect(isValid(undefined)).toBeFalsy();
  });

  test('should return false for null values', () => {
    // @ts-ignore
    expect(isValid(null)).toBeFalsy();
  });

  test('should return false for an empty object', () => {
    expect(isValid({})).toBeFalsy();
  });

  test('should return false for an empty string', () => {
    expect(isValid('')).toBeFalsy();
  });

  test('should return false for a number that is zero', () => {
    expect(isValid(0)).toBeFalsy();
  });

  test('should return true for a number that is not zero', () => {
    expect(isValid(5)).toBeTruthy();
  });

  test('should return true for a valid string', () => {
    expect(isValid('hello')).toBeTruthy();
  });

  test('should return true for a valid object', () => {
    const obj = {
      name: 'mike',
    };
    expect(isValid(obj)).toBeTruthy();
  });

  test('should return true for an array with some values', () => {
    expect(isValid([1, 2, 3])).toBeTruthy();
  });

  test('should return true for a valid date', () => {
    const dte = new Date('1/1/2023');
    expect(isValid(dte)).toBeTruthy();
  });
});
