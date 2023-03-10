import {
  getDateDetails,
  daysInMonth,
  isSameMonth,
  isSameDay,
  getDayOfDate,
  getMonthName,
} from '../src';

describe('getDateDetails tests', () => {
  test('should return 1 for day, 1 for month, 2023 for year', () => {
    const testDate = new Date(2023, 0, 1);
    const { day, month, year } = getDateDetails(testDate);
    expect(day).toEqual(1);
    expect(month).toEqual(0);
    expect(year).toEqual(2023);
  });
});

describe('daysInMonth tests', () => {
  test('should return the days in the months', () => {
    expect(daysInMonth(0, 2023)).toEqual(31);
    expect(daysInMonth(1, 2023)).toEqual(28);
    expect(daysInMonth(2, 2023)).toEqual(31);
    expect(daysInMonth(3, 2023)).toEqual(30);
    expect(daysInMonth(4, 2023)).toEqual(31);
    expect(daysInMonth(5, 2023)).toEqual(30);
    expect(daysInMonth(6, 2023)).toEqual(31);
    expect(daysInMonth(7, 2023)).toEqual(31);
    expect(daysInMonth(8, 2023)).toEqual(30);
    expect(daysInMonth(9, 2023)).toEqual(31);
    expect(daysInMonth(10, 2023)).toEqual(30);
    expect(daysInMonth(11, 2023)).toEqual(31);
  });
});

describe('isSameMonth', () => {
  test('should determine if the month is the same', () => {
    const testDate = new Date(2023, 2, 5);
    const goodDate = new Date(2023, 2, 15);
    const badDate = new Date(2023, 1, 5);
    expect(isSameMonth(goodDate, testDate)).toBeTruthy();
    expect(isSameMonth(badDate, testDate)).toBeFalsy();
  });
});

describe('isSameDay', () => {
  test('should determine if the days are the same', () => {
    const testDate = new Date(2023, 2, 5);
    const goodDate = new Date(2023, 2, 5);
    const badDate1 = new Date(2023, 2, 6);
    const badDate2 = new Date(2021, 2, 5);
    expect(isSameDay(goodDate, testDate)).toBeTruthy();
    expect(isSameDay(badDate1, testDate)).toBeFalsy();
    expect(isSameDay(badDate2, testDate)).toBeFalsy();
  });
});

describe('getDayOfDate', () => {
  test('should return the day of the week', () => {
    expect(getDayOfDate(new Date(2022, 2, 27))).toEqual('Sunday');
    expect(getDayOfDate(new Date(2022, 2, 26))).toEqual('Saturday');
    expect(getDayOfDate(new Date(2022, 2, 25))).toEqual('Friday');
    expect(getDayOfDate(new Date(2022, 2, 24))).toEqual('Thursday');
    expect(getDayOfDate(new Date(2022, 2, 23))).toEqual('Wednesday');
    expect(getDayOfDate(new Date(2022, 2, 22))).toEqual('Tuesday');
    expect(getDayOfDate(new Date(2022, 2, 21))).toEqual('Monday');
  });
});

describe('getMonthName', () => {
  test('should return the name of the month', () => {
    expect(getMonthName(new Date(2023, 0, 1))).toEqual('January');
    expect(getMonthName(new Date(2023, 1, 1))).toEqual('February');
    expect(getMonthName(new Date(2023, 2, 1))).toEqual('March');
    expect(getMonthName(new Date(2023, 3, 1))).toEqual('April');
    expect(getMonthName(new Date(2023, 4, 1))).toEqual('May');
    expect(getMonthName(new Date(2023, 5, 1))).toEqual('June');
    expect(getMonthName(new Date(2023, 6, 1))).toEqual('July');
    expect(getMonthName(new Date(2023, 7, 1))).toEqual('August');
    expect(getMonthName(new Date(2023, 8, 1))).toEqual('September');
    expect(getMonthName(new Date(2023, 9, 1))).toEqual('October');
    expect(getMonthName(new Date(2023, 10, 1))).toEqual('November');
    expect(getMonthName(new Date(2023, 11, 1))).toEqual('December');
  });
});
