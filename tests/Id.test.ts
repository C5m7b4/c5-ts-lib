import { Id, trace, traceMap } from '../src';

const x = [20];
const f = (n: number) => Id<number>(n + 1);
const g = (n: number) => Id<number>(n * 2);

describe('id tests', () => {
  test('should pass left identity principal', () => {
    const result1 = Id<number>(x).chain(f).toString();
    // @ts-ignore
    const result2 = f(x).toString();
    expect(result1).toEqual(result2);
  });

  test('should pass right identity principal', () => {
    const result1 = Id(x).chain(Id.of);
    const result2 = Id(x);
    expect(result1.toString()).toEqual(result2.toString());
  });

  test('should pass assoiativity principal', () => {
    const result1 = Id(x).chain(g).chain(f);
    const result2 = Id(x).chain((x) => g(x).chain(f));
    expect(result1.toString()).toEqual(result2.toString());
  });

  test('should be able to map', () => {
    const arr = [10, 20, 30];
    const result = Id(arr)
      .map((x) => x.map((y) => y + 1))
      .toString();
    expect(result).toEqual('Id(11,21,31)');
  });

  test('should be able to log our progress', () => {
    const arr = [10, 20, 30];
    const result = Id(arr)
      .map((x) => x.map((y) => y + 1))
      .map((x) => traceMap('after first pass')(x))
      .toString();
    expect(result).toEqual('Id(11,21,31)');
  });

  test('should be able to use trace', () => {
    const y = 20;
    const result = trace('Id monad left identity')([Id(y).chain(f), f(y)]);
    expect(result.toString()).toEqual('Id(21),Id(21)');
  });
});
