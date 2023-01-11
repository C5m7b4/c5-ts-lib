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
