import { append } from '../src';

describe('append tests', () => {
  test('should append two strings', () => {
    expect(append('thing')('some')).toEqual('something');
  });
});
