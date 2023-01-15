import { BubbleSort } from '../src';
import {
  data,
  dataByReverseId,
  dataByPriceAsc,
  dataByPriceDescending,
  dataByDescription,
  dataByDescriptionDescending,
  dataWithDates,
  dataWithDatesDescending,
  testFixData,
  testFixDataDesc,
} from './data';

describe('bubblesort tests', () => {
  test('should sort an array of numbers', () => {
    const arr = [6, 5, 4, 3, 2, 1];
    const result = BubbleSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(BubbleSort([9, 1, 7, 8, 2, 5])).toEqual([1, 2, 5, 7, 8, 9]);
  });

  test('should sort number desending', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = BubbleSort(arr, false);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
    expect(BubbleSort([9, 1, 7, 8, 2, 5], false)).toEqual([9, 8, 7, 5, 2, 1]);
  });

  test('should throw an error if there are no items in the array', () => {
    expect(() => BubbleSort([])).toThrowError();
  });

  test('should throw an error if the first argument is not an array', () => {
    // @ts-ignore
    expect(() => BubbleSort(null)).toThrowError();
  });

  test('should sort by id descending order', () => {
    const result = BubbleSort(data, false, 'id');
    expect(result).toEqual(dataByReverseId);
  });

  test('should sort by price ascending', () => {
    const result = BubbleSort(data, true, 'price');
    expect(result).toEqual(dataByPriceAsc);
  });

  test('should sort by price descending', () => {
    const result = BubbleSort(data, false, 'price');
    expect(result).toEqual(dataByPriceDescending);
  });

  test('should sort by description ascending', () => {
    const result = BubbleSort(data, true, 'description');
    expect(result).toEqual(dataByDescription);
  });

  test('should sort by description descending', () => {
    const result = BubbleSort(data, false, 'description');
    expect(result).toEqual(dataByDescriptionDescending);
  });

  test('should sort dates ascending', () => {
    const result = BubbleSort(dataWithDates, true, 'expires', true);
    expect(result).toEqual(dataWithDates);
  });
  test('should sort dates descending', () => {
    const result = BubbleSort(dataWithDates, false, 'expires', true);
    expect(result).toEqual(dataWithDatesDescending);
  });

  test('should sort jumbed numbers desending', () => {
    const arr = [5, 2, 4, 1, 3];
    const result = BubbleSort(arr, false);
    expect(result).toEqual([5, 4, 3, 2, 1]);
    const result1 = BubbleSort(arr);
    expect(result1).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort test data descending', () => {
    const result = BubbleSort(testFixData, false, 'category');
    expect(result).toEqual(testFixDataDesc);
  });
});
