import { Sub } from '../src';

describe('sub tests', () => {
  test('should subtract two numbers', () => {
    expect(Sub(5, 2)).toEqual(3);
  });
});
