import { formatMoney } from '../src';

describe('formatMoney', () => {
  test("converts '1.25' to '$1.25'", () => {
    expect(formatMoney('1.25')).toEqual('$1.25');
  });
  test("convert '1.1' to '$1.10'", () => {
    expect(formatMoney('1.1')).toEqual('$1.10');
  });
  test("convert '.2' to '.20'", () => {
    expect(formatMoney('.2')).toEqual('.20');
  });
  test("should return '0' if the value is undefined or null", () => {
    // @ts-ignore
    expect(formatMoney(null)).toBe('0.00');
    // @ts-ignore
    expect(formatMoney(undefined)).toBe('0.00');
  });
  test('should truncate the decimals if they are greater than two', () => {
    expect(formatMoney(2.354689)).toEqual('$2.35');
  });
  test('should exclude dollar sign', () => {
    expect(formatMoney('2.35', false)).toEqual('2.35');
  });
});
