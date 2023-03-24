# c5-ts-lib

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/C5m7b4/c5-ts-lib/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/C5m7b4/c5-ts-lib/tree/master)
![CircleCI](https://img.shields.io/circleci/build/github/C5m7b4/c5-ts-lib/master?style=plastic)
[![codecov](https://codecov.io/gh/C5m7b4/c5-ts-lib/branch/master/graph/badge.svg?token=eoy3bDqgts)](https://codecov.io/gh/C5m7b4/c5-ts-lib)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/C5m7b4/c5-ts-lib?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/C5m7b4/c5-ts-lib?style=plastic)
![GitHub](https://img.shields.io/github/license/c5m7b4/c5-ts-lib?style=plastic)

This is my attempt at a typescript library aimed at helping make peoples lives a little easier when coding. Here are the components that are currently offered.

- [addDays](#adddays)
- [append](#append)
- [Box](#box)
- [Bubble Sort](#bubble-sort)
- [compose](#compose)
- [Conditional](#conditional)
- [curry](#curry)
- [date](#date)
- [formatDate](#formatdate)
- [formatMoney](#formatmoney)
- [Id](#id)
- [isValid](#isvalid)
- [Maybe](#maybe)
- [pad](#pad)
- [prop](#prop)
- [PubSub](#pubsub)
- [QuickSort](#quicksort)
- [Queue](#queue)
- [Stack](#stack)
- [swap](#swap)
- [trace](#trace)
- [traceMap](#tracemap)

## addDays

This function will let you either pass in a string or a date object and it will add the specified days to it. If you pass in null or undefined, you will get back a new Date;
ex:

```js
addDays('1/1/2023', 7)
```

## append

This function just appends two strings
ex: 

```js
expect(append('thing')('some')).toEqual('something');
```

## Box

This monad has many uses. It allow you to map over your data to transform it into anything you want.
ex:

```js
Box(data)
  .map(x => x.filter(y => y.id === 1))
  .map(x => x.filter(y => y.date > '1/1/2023'))
  .fold(x => x);
```

## Bubble Sort

A sorting algorithm that loops through all the elements and compares the current element to the next element and uses a swapping technique to handle the sorting
| prop | required | date type | description |
|------|:--------:|----------:|-------------|
| items | ✅ | array | an array of items |
| asc | [ ] | boolean | use if you want to control the direction |
| property | [ ] | keyof T | the property on the array of objects that you want to sort by |
| isDate |  [ ] | boolean | used to sort by a date value

ex

```js
    const arr = [6, 5, 4, 3, 2, 1];
    const result = BubbleSort(arr);

    const result = BubbleSort(data, false, 'id');

    const result = BubbleSort(dataWithDates, true, 'expires', true);

```

## compose

This function will chain together a number of functions passing the output of each function to the input of the next function
ex:

```js
const result = compose(addOne, addTwo, addThree);
```

## Conditional

A super sweet functional function to handle if/else/then
ex:

```js
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
```

```js
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
```

## curry

This is a very powerful function that allows you to curry a function that takes multiple arguments and create functions from that that can take each argument one at a time and return another function until all the arguments have been supplied.
ex:

```js
    const curriedAdd = curry(Add);
    const firstNumberAdded = curriedAdd(4);
    const actualFunctionExecutedWhenAllArgumentsArePresent =
      firstNumberAdded(5);
    expect(actualFunctionExecutedWhenAllArgumentsArePresent).toEqual(9);
```

## date

This library has functions like get DateDetails, daysInMonth, isSameMonth, IsSameDay, getDayOfDate, and getMonthName
ex:

```js
    expect(daysInMonth(0, 2023)).toEqual(31);
```

## formatDate

This function will return back a basic date like 1/1/2023. If you pass in null or undefined, you will get back an empty string.
ex:

```js
expect(formatDate(new Date('1/1/2023'))).toBe('1/1/2023');
```

## formatMoney

This function will nicely format money for report purposes
ex:

```js
expect(formatMoney('.2')).toEqual('.20');
```

## Id

This is the identity monad
left identity

```js
    const result1 = Id<number>(x).chain(f).toString();
    // @ts-ignore
    const result2 = f(x).toString();
    expect(result1).toEqual(result2);
```

right identity

```j    const result1 = Id(x).chain(Id.of);
    const result2 = Id(x);
    expect(result1.toString()).toEqual(result2.toString());s

```

mapping

```js
    const arr = [10, 20, 30];
    const result = Id(arr)
      .map((x) => x.map((y) => y + 1))
      .toString();
    expect(result).toEqual('Id(11,21,31)');
```

## isValid

This function can be used to validate that a string or a number or date or array or even an object can be used. This is your failsafe function.
ex:

```js
expect(isValid(null)).toBeFalsy();

expect(isValid('')).toBeFalsy();

expect(isValid(0)).toBeFalsy();

const obj = {
  name: 'mike',
};
expect(isValid(obj)).toBeTruthy();
```

## Maybe

Another monad, but this one handle null input very well
ex:

```js
    const appendC = Maybe.chain(prop('b'), prop('c'), append(' is great'));
    const goodInput = Maybe.just({
      b: {
        c: 'fp',
      },
    });

    const badInput = Maybe.just({});
    expect(appendC(goodInput).extract()).toEqual('fp is great');
    expect(appendC(badInput).extract()).toBeNull();
```

## pad

This function will either left or right pad a string for you
ex:

```js
expect(pad('ss', 4, '0')).toEqual('00ss');
```

## PubSub

A really nice publisher/subscriber algorithm
ex:

```js
    let subscriberNotification = '';
    const response = (msg) => {
      subscriberNotification = msg;
    };
    const pubSub = PubSub<string>();
    const unsubscribe = pubSub.subscribe(response);
    pubSub.publish('hello');
    expect(subscriberNotification).toEqual('hello');
    unsubscribe();
    pubSub.publish('you should not see this');
    expect(subscriberNotification).toEqual('hello');
```

## prop

This function fetches properties of objects
ex:

```js
    const obj = {
      id: 1,
      name: 'mike',
    };
    expect(prop('name')(obj)).toEqual('mike');
```

## stack

This class is the classic stack class. It is LIFO(last in, first out)
ex:

```js
    const stack = new Stack<string>();
    stack.push('a');
    expect(stack.size()).toEqual(1);
    expect(stack.peek()).toEqual('a');
    stack.pop();
    expect(stack.size()).toEqual(0);
```

## QuickSort

A Sorting algorithm that uses a pivot to split data and then sort the left and right and then swap out indexes in the array to sort the data. This supports ascending and desending order as well as arrays of objects. 
ex

```js
const result = QuickSort(dataWithDates, true, 'expires', true);
```

## queue

queue is a data struccture that is FIFO (first in first out)
these are the methods

- enqueue
- dequeue
- size

## swap

This function will swap two indexes out of an array

## trace

This function can be used to debug your monads

## traceMap

This is another useful debugging tool for you monads