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
  property?: keyof T
) => {
  const pivot = property
    ? items[Math.floor((right + left) / 2)][property]
    : items[Math.floor((right + left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    if (property) {
      while (items[i][property] < pivot && asc) {
        i++;
      }
      while (items[i][property] > pivot && !asc) {
        i++;
      }
      while (items[j][property] > pivot && asc) {
        j--;
      }
      while (items[j][property] < pivot && !asc) {
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
  property?: keyof T
): T[] => {
  const index = partition(items, left, right, asc, property);
  if (left < index - 1) {
    qs(items, left, index - 1, asc, property);
  }
  if (index < right) {
    qs(items, index, right, asc, property);
  }
  return items;
};

export const QuickSort = <T>(items: T[], asc = true, property?: keyof T) => {
  if (!Array.isArray(items)) {
    throw new Error(
      'you must pass in an array as the first argument to QuickSort'
    );
  }

  if (items.length > 0) {
    const copyOfItems = [...items];
    return qs(copyOfItems, 0, copyOfItems.length - 1, asc, property);
  } else {
    throw new Error('you must at least specify some items i an array');
  }
};
