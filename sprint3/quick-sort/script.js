function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return arr;
  }
  let pivotIndex = partition(arr,start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(quickSort([6,5,1,3,8,4,7,9,2]));