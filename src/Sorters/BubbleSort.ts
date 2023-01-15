import { swap } from '../Utils';

export const BubbleSort = <T>(
  items: T[],
  asc = true,
  property?: keyof T,
  isDate = false
): T[] => {
  if (!Array.isArray(items)) {
    throw new Error(
      'you must pass in an array as the first argument to BubbleSort'
    );
  }
  const arr = [...items];
  if (arr.length > 0) {
    if (property) {
      if (asc) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (
              isDate
                ? new Date(arr[j][property] as string) >
                  new Date(arr[j + 1][property] as string)
                : arr[j][property] > arr[j + 1][property]
            ) {
              swap(arr, j);
            }
          }
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (
              isDate
                ? new Date(arr[j][property] as string) <
                  new Date(arr[j + 1][property] as string)
                : arr[j][property] < arr[j + 1][property]
            ) {
              swap(arr, j);
            }
          }
        }
      }
    } else {
      if (asc) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              swap(arr, j);
            }
          }
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
              swap(arr, j);
            }
          }
        }
      }
    }
  } else {
    throw new Error('You must at least specify some items in our array');
  }

  return arr;
};
