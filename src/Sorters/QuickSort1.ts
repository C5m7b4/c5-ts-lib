export const QuickSort = <T>(arr: T[], asc = true, property?: keyof T): T[] => {
  const a = Array.from(arr);
  // base case, array of length of 1
  if (a.length <= 1) return a;

  // choose pivot
  //const pivot = a[a.length - 1];
  const pivot = property ? a[a.length - 1][property] : a[a.length - 1];

  // separate left and right arrays
  const left = [];
  const right = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (property) {
      if (asc) {
        if (a[i][property] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(a[i]);
        }
      } else {
        if (a[i][property] > pivot) {
          left.push(arr[i]);
        } else {
          right.push(a[i]);
        }
      }
    } else {
      if (asc) {
        if (a[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(a[i]);
        }
      } else {
        if (a[i] > pivot) {
          left.push(arr[i]);
        } else {
          right.push(a[i]);
        }
      }
    }
  }

  // call quicksort on left and right arrays
  const sortedLeft = QuickSort(left, asc, property);
  const sortedRight = QuickSort(right, asc, property);

  return sortedLeft.concat(pivot, sortedRight);
};
