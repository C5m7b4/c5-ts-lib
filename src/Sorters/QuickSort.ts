const swap = <T>(items: T[], left: number, right: number): void => {
  const temp = items[left];
  items[left] = items[right];
  items[right] = temp;
};

const partition = <T>(
  items: T[],
  left: number,
  right: number,
  asc: boolean,
  property?: keyof T,
  isDate?: boolean
) => {
  const pivot = property
    ? isDate
      ? new Date(items[Math.floor((right + left) / 2)][property] as string)
      : items[Math.floor((right + left) / 2)][property]
    : items[Math.floor((right + left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    if (property) {
      while (
        isDate
          ? new Date(items[i][property] as string) < pivot && asc
          : items[i][property] < pivot && asc
      ) {
        i++;
      }
      while (
        isDate
          ? new Date(items[i][property] as string) > pivot && !asc
          : items[i][property] > pivot && !asc
      ) {
        i++;
      }
      while (
        isDate
          ? new Date(items[j][property] as string) > pivot && asc
          : items[j][property] > pivot && asc
      ) {
        j--;
      }
      while (
        isDate
          ? new Date(items[j][property] as string) < pivot && !asc
          : items[j][property] < pivot && !asc
      ) {
        j--;
      }
    } else {
      while (items[i] < pivot && asc) {
        i++;
      }
      while (items[i] > pivot && !asc) {
        i++;
      }
      while (items[j] > pivot && asc) {
        j--;
      }
      while (items[j] < pivot && !asc) {
        j--;
      }
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const qs = <T>(
  items: T[],
  left: number,
  right: number,
  asc: boolean,
  property?: keyof T,
  isDate?: boolean
): T[] => {
  const index = partition(items, left, right, asc, property, isDate);
  if (left < index - 1) {
    qs(items, left, index - 1, asc, property, isDate);
  }
  if (index < right) {
    qs(items, index, right, asc, property, isDate);
  }
  return items;
};

export const QuickSort = <T>(
  items: T[],
  asc = true,
  property?: keyof T,
  isDate = false
) => {
  if (!Array.isArray(items)) {
    throw new Error(
      'you must pass in an array as the first argument to QuickSort'
    );
  }

  if (items.length > 0) {
    const copyOfItems = [...items];
    return qs(copyOfItems, 0, copyOfItems.length - 1, asc, property, isDate);
  } else {
    throw new Error('you must at least specify some items i an array');
  }
};
