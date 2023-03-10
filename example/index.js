/* eslint-disable no-console */
console.log('you are ready to start coding');

// import { curry } from '../src';

// const data = [
//   {
//     id: 1,
//     name: 'bannana',
//     price: 0.3,
//     category: 'fruit',
//   },
//   {
//     id: 2,
//     name: 'gum',
//     price: 1.95,
//     category: 'candy',
//   },
//   {
//     id: 3,
//     name: 'certs',
//     price: 2.15,
//     category: 'candy',
//   },
// ];

// const getFoodByCategoryAndPrice = (arr, category, price) => {
//   const arr1 = arr.filter((i) => i.category === category);
//   const arr2 = arr1.filter((i) => i.price > price);
//   return arr2;
// };

// function getFoodByCategoryAndPrice(arr, category, price){
//   // first filter by category
//   const arr1 = arr.filter((i) => i.category === category);
//   // now filter those by the price
//   const arr2 = arr1.filter((i) => i.price > price);
//   // then retur the price
//   return arr2;
// }

// const getFoodByCategoryAndPrice = (arr, category, price) =>
//   arr.filter((i) => i.category === category).filter((i) => i.price > price);

// const curriedFilter = curry(getFoodByCategoryAndPrice);

// const getItems = curriedFilter(data);

// const getItemsByCategory = getItems('candy');

// const getPricesOverTwoDollars = getItemsByCategory(2);

// console.log(getPricesOverTwoDollars);

// const reduced = [1, 2, 3, 4, 5, 6].reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

// console.log(reduced);

// import { compose } from '../src';

// const people = [
//   {
//     id: 1,
//     first: 'tim',
//     last: 'kelly',
//   },
//   {
//     id: 2,
//     first: 'kathy',
//     last: 'bates',
//   },
// ];

// const lowerFirst = (x) =>
//   x.map((p) => ({ ...p, first: p.first.toLowerCase() }));

// const lowerLast = (x) => x.map((p) => ({ ...p, last: p.last.toLowerCase() }));

// const capitalizeFirst = (x) =>
//   x.map((p) => ({
//     ...p,
//     first: [p.first.substring(0, 1).toUpperCase(), p.first.slice(1)].join(''),
//   }));

// const capitalizeLast = (x) =>
//   x.map((p) => ({
//     ...p,
//     last: [p.last.substring(0, 1).toUpperCase(), p.last.slice(1)].join(''),
//   }));

// const concat = (x) => x.map((p) => [p.first, p.last].join(' '));

// const getPeople = compose(
//   lowerFirst,
//   lowerLast,
//   capitalizeFirst,
//   capitalizeLast,
//   concat
// );

// console.log(getPeople(people));

import { Id, trace, traceMap } from '../src';

const x = [20];

const g = (n) => Id(n + 1);
const f = (n) => Id(n * 2);

// left identity
//unit(x).chain(f) === f(x)
trace('Id monad left identity')([Id(x).chain(f), f(x)]);

// right identity
// f.chain(unit) === f
trace('Id monad right identity')([Id(x).chain(Id.of), Id(x)]);

// associativity
// m.chain(f).chain(g) === m.chain(x => f(x).chain(g))
trace('Id monad associativity')([
  Id(x).chain(g).chain(f),
  Id(x).chain((x) => g(x).chain(f)),
]);

const result1 = Id(x).chain(f);
const result2 = f(x);
console.log('result1', result1.toString());
console.log('resul2', result2.toString());

const arr = [10, 20, 30];

const result3 = Id(arr)
  .map((x) => x.map((y) => y + 1))
  .map((x) => traceMap('after first map')(x))
  .toString();
console.log('result3', result3);

const result = trace('Id monad left identity')([Id(x).chain(f), f(x)]);
console.log('restul', result.toString());

import { Box } from '../src';

const serialKillers = [
  {
    name: 'Jeffry',
    faction: 'bathhouse',
  },
  {
    name: 'Jack the Ripper',
    faction: 'notorious',
  },
  {
    name: 'John Wayne Gacy',
    faction: 'construction',
  },
];

const whosHeadIsInTheBox = (data) =>
  Box(data)
    .map((x) => x.filter((k) => k.faction === 'bathhouse'))
    .map((x) => x.map((k) => k.name));

console.log(whosHeadIsInTheBox(serialKillers));

const whosHeadIsInTheBoxUnfolded = (data) =>
  Box(data)
    .map((x) => x.filter((k) => k.faction === 'bathhouse'))
    .map((x) => x.map((k) => k.name))
    .fold((x) => x);

console.log(whosHeadIsInTheBoxUnfolded(serialKillers));

import { QuickSort } from '../src';

const numbers = [5, 1, 9, 3];
const sortedAsc = QuickSort(numbers);
console.log('asc', sortedAsc);
const sortedDesc = QuickSort(numbers, false);
console.log('desc', sortedDesc);

import { BubbleSort } from '../src';

const bubbleSortedAsc = BubbleSort(numbers);
console.log('bubbleSortedAsc', bubbleSortedAsc);

const jumbled = [5, 2, 4, 1, 3];
const bs = BubbleSort(jumbled);
console.log('jumbled', bs);

import { dataWithDates, moreDates } from '../tests/data';

const quickSortedDates = QuickSort(dataWithDates, true, 'expires', true);
console.log('quickSortedDates', quickSortedDates);
const quickSortedDatesDesc = QuickSort(moreDates, false, 'expires', true);
console.log('quickSortedDatesDesc', quickSortedDatesDesc);

import { PubSub } from '../src';

const toast1Container = document.createElement('div');
toast1Container.id = 'toast1';
toast1Container.innerHTML = 'here are my toasts';
document.body.appendChild(toast1Container);

const subscriptionResponse = (msg) => {
  const div = document.getElementById('toast1');
  div.innerHTML = msg;
  console.log('msg', msg);
};

const toast1 = PubSub();
toast1.subscribe(subscriptionResponse);

toast1.publish('here is my first toast');

const toast2Container = document.createElement('div');
toast2Container.id = 'toast2';
toast2Container.innerHTML = 'here is my second toast container';
document.body.appendChild(toast2Container);

const toast2 = toast1;
toast2.subscribe((msg) => {
  const div = document.getElementById('toast2');
  div.innerHTML = msg;
  console.log('toast2', msg);
});
toast1.publish('here is a new message');

import { Conditional } from '../src';

const hasGoodRating = (rating) => rating > 4;

const priceChange = Conditional({
  if: () => (x) => x > 4,
  then: (rating) => 1000 * rating,
  else: () => 1000,
});

const getDescription = Conditional({
  if: hasGoodRating,
  then: () => 'good car',
  else: () => 'bad car',
});

function getCarConfig(car) {
  return {
    newPrice: priceChange(car.rating) + car.price,
    description: getDescription(car.rating),
  };
}

const car = {
  rating: 5,
  price: 1.99,
};

const carResult = getCarConfig(car);
console.log('carresult', carResult);

const hasPrice = Conditional({
  if: (price) => typeof price === 'number',
  then: (price) => price,
  else: () => 'no price present',
});

const items = [
  {
    id: 1,
    description: 'penut butter',
    price: 1.1,
  },
  {
    id: 2,
    description: 'jelly',
    price: '',
  },
];

const processItems = (data) =>
  Box(data)
    .map((x) => x.map((r) => ({ ...r, price: hasPrice(r.price) })))
    .fold((x) => x);

console.log(processItems(items));
