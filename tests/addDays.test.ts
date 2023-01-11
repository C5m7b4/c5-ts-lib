import { addDays, formatDate } from '../src';

describe('addDays tests', () => {
  test('should add days from a string input', () => {
    const newDate = addDays('1/1/2023', 5);
    expect(formatDate(newDate)).toEqual('1/6/2023');
  });

  test('should handle undefined', () => {
    // @ts-ignore
    const newDate = addDays(undefined, 5);
    expect(formatDate(newDate)).toEqual(formatDate(new Date()));
  });

  test('should handle null', () => {
    // @ts-ignore
    const newDate = addDays(null, 5);
    expect(formatDate(newDate)).toEqual(formatDate(new Date()));
  });

  test('should add days when receiving a date', () => {
    const newDate = new Date('1/1/2023');
    const added = addDays(newDate, 5);
    expect(formatDate(added)).toEqual('1/6/2023');
  });
});
