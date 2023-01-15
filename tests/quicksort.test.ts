import { QuickSort } from '../src';
import {
  data,
  dataByReverseId,
  dataByPriceAsc,
  dataByPriceDescending,
  dataByDescription,
  dataByDescriptionDescending,
  dataWithDates,
  dataWithDatesDescending,
  dataToPassQuickSortCoverage,
  dataToPassQuickSortCoverageDescending,
  moreDates,
} from './data';

describe('quicksort tests', () => {
  test('should not mutate the array', () => {
    const arr = [5, 3, 7, 6, 2, 9];
    const result = QuickSort(arr);
    expect(result).toEqual([2, 3, 5, 6, 7, 9]);
    expect(arr).toEqual([5, 3, 7, 6, 2, 9]);
  });

  test('should sort numbers', () => {
    const arr = [5, 3, 7, 6, 2, 9];
    const result = QuickSort(arr);
    expect(result).toEqual([2, 3, 5, 6, 7, 9]);
  });

  test('should throw an error if there are no items in the array', () => {
    expect(() => QuickSort([])).toThrowError();
  });

  test('should throw an error if the first argument is not an array', () => {
    // @ts-ignore
    expect(() => QuickSort(null)).toThrowError();
  });

  test('should sort numbers descending', () => {
    const arr = [5, 3, 7, 6, 2, 9];
    const result = QuickSort(arr, false);
    expect(result).toEqual([9, 7, 6, 5, 3, 2]);
  });

  test('should sort an array of strings', () => {
    const arr = ['hello', 'sir', 'mam', 'cold', 'hot'];
    const result = QuickSort(arr);
    expect(result).toEqual(['cold', 'hello', 'hot', 'mam', 'sir']);
  });

  test('should sort an array of string descending', () => {
    const arr = ['hello', 'sir', 'mam', 'cold', 'hot'];
    const result = QuickSort(arr, false);
    expect(result).toEqual(['sir', 'mam', 'hot', 'hello', 'cold']);
  });

  test('should sort an array of objects by property ascending', () => {
    const result = QuickSort(data, true, 'id');
    expect(result).toEqual(data);
  });

  test('should sort and array of objects by property descending', () => {
    const result = QuickSort(data, false, 'id');
    expect(result).toEqual(dataByReverseId);
  });

  test('should sort an array of objects by price ascending', () => {
    const result = QuickSort(data, true, 'price');
    expect(result).toEqual(dataByPriceAsc);
  });

  test('should sort an array of objects by price descending', () => {
    const result = QuickSort(data, false, 'price');
    expect(result).toEqual(dataByPriceDescending);
  });

  test('should sort an array of objects by description ascending', () => {
    const result = QuickSort(data, true, 'description');
    expect(result).toEqual(dataByDescription);
  });

  test('should sort and array of objects by description descending', () => {
    const result = QuickSort(data, false, 'description');
    expect(result).toEqual(dataByDescriptionDescending);
  });

  test('should sort an array of objects by date ascending', () => {
    const result = QuickSort(dataWithDates, true, 'expires', true);
    expect(result).toEqual(dataWithDates);
  });

  test('should sort an array of objects by date descending', () => {
    const result = QuickSort(dataWithDates, false, 'expires', true);
    expect(result).toEqual(dataWithDatesDescending);
    expect(QuickSort(moreDates, false, 'expires', true)).toEqual([
      {
        id: 1,
        expires: '1/1/2023',
      },
      {
        id: 4,
        expires: '7/1/2022',
      },
      {
        id: 3,
        expires: '5/1/2022',
      },
      {
        id: 2,
        expires: '7/3/2021',
      },
    ]);
  });

  test('should help fix code coverage with more sorting examples', () => {
    const result = QuickSort(dataToPassQuickSortCoverage, false, 'name');
    expect(result).toEqual(dataToPassQuickSortCoverageDescending);
  });
});
