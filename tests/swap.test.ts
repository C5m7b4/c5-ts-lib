import { swap } from '../src';

describe('swap', () => {
  test('should swap two items in an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = swap(arr, 2);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });
});
