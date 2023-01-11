import { prop } from '../src';

describe('prop', () => {
  test('should get a property from an object', () => {
    const obj = {
      id: 1,
      name: 'mike',
    };
    expect(prop('name')(obj)).toEqual('mike');
  });
});
