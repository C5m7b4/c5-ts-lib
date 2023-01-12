/* eslint-disable no-console */
console.log('you are ready to start coding');

import { curry } from '../src';

const data = [
  {
    id: 1,
    name: 'bannana',
    price: 0.3,
    category: 'fruit',
  },
  {
    id: 2,
    name: 'gum',
    price: 1.95,
    category: 'candy',
  },
  {
    id: 3,
    name: 'certs',
    price: 2.15,
    category: 'candy',
  },
];

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

const getFoodByCategoryAndPrice = (arr, category, price) =>
  arr.filter((i) => i.category === category).filter((i) => i.price > price);

const curriedFilter = curry(getFoodByCategoryAndPrice);

const getItems = curriedFilter(data);

const getItemsByCategory = getItems('candy');

const getPricesOverTwoDollars = getItemsByCategory(2);

console.log(getPricesOverTwoDollars);

const reduced = [1, 2, 3, 4, 5, 6].reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(reduced);

import { compose } from '../src';

const people = [
  {
    id: 1,
    first: 'tim',
    last: 'kelly',
  },
  {
    id: 2,
    first: 'kathy',
    last: 'bates',
  },
];

const lowerFirst = (x) =>
  x.map((p) => ({ ...p, first: p.first.toLowerCase() }));

const lowerLast = (x) => x.map((p) => ({ ...p, last: p.last.toLowerCase() }));

const capitalizeFirst = (x) =>
  x.map((p) => ({
    ...p,
    first: [p.first.substring(0, 1).toUpperCase(), p.first.slice(1)].join(''),
  }));

const capitalizeLast = (x) =>
  x.map((p) => ({
    ...p,
    last: [p.last.substring(0, 1).toUpperCase(), p.last.slice(1)].join(''),
  }));

const concat = (x) => x.map((p) => [p.first, p.last].join(' '));

const getPeople = compose(
  lowerFirst,
  lowerLast,
  capitalizeFirst,
  capitalizeLast,
  concat
);

console.log(getPeople(people));
