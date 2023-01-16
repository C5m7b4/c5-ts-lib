import { Conditional } from '../src';

describe('conditional tests', () => {
  test('should return a number if one is present', () => {
    const obj = {
      id: 1,
      price: 1.1,
    };

    const testPrice = Conditional({
      if: (x) => typeof x === 'number',
      else: () => 'not a number',
      then: (x) => x,
    });

    expect(testPrice(obj.price)).toEqual(1.1);
  });

  test('should return "not a number" if a number is not present', () => {
    const obj = {
      id: 1,
      price: null,
    };

    const testPrice = Conditional({
      if: (x) => typeof x === 'number',
      else: () => 'not a number',
      then: (x) => x,
    });

    expect(testPrice(obj.price)).toEqual('not a number');
  });
});
