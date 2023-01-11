import { curry, Add } from '../src';

describe('curry tests', () => {
  test('should run a curried file inline', () => {
    const curriedAdd = curry(Add);
    expect(curriedAdd(4)(5)).toEqual(9);
  });

  test('should run a test that is easier on the eyes', () => {
    const curriedAdd = curry(Add);
    const firstNumberAdded = curriedAdd(4);
    const actualFunctionExecutedWhenAllArgumentsArePresent =
      firstNumberAdded(5);
    expect(actualFunctionExecutedWhenAllArgumentsArePresent).toEqual(9);
  });

  test('should resemble a real work example', () => {
    interface IEmployee {
      id: number;
      name: string;
      job: string;
    }
    const testData: IEmployee[] = [
      {
        id: 1,
        name: 'mike',
        job: 'developer',
      },
      {
        id: 2,
        name: 'jimbo',
        job: 'manager',
      },
      {
        id: 3,
        name: 'susan',
        job: 'advertising',
      },
      {
        id: 4,
        name: 'austin',
        job: 'developer',
      },
      {
        id: 5,
        name: 'bob',
        job: 'advertising',
      },
    ];

    const getEmployees = (arr: IEmployee[], jobType: string) =>
      arr.filter((e: IEmployee) => e.job === jobType);

    const curriedEmployeeFilter = curry(getEmployees);

    const getEmployeesByJobType = curriedEmployeeFilter(testData);

    const developers = getEmployeesByJobType('developer');
    expect(developers).toEqual([
      {
        id: 1,
        name: 'mike',
        job: 'developer',
      },
      {
        id: 4,
        name: 'austin',
        job: 'developer',
      },
    ]);

    const advertisers = getEmployeesByJobType('advertising');
    expect(advertisers).toEqual([
      {
        id: 3,
        name: 'susan',
        job: 'advertising',
      },
      {
        id: 5,
        name: 'bob',
        job: 'advertising',
      },
    ]);
  });
});
