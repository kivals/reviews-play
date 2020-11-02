/*
Сортировка вставками
Реализуйте алгоритм сортировки вставками.
Для этого прочитайте ещё раз текстовое описание алгоритма и реализуйте его в коде.
    Идём по массиву от 1 до n. Текущий индекс будет i.
    Ищем индекс вставки элемента insertionIndex:
    2.1 Выставляем insertionIndex = 0 по умолчанию.
    2.2 Идём по массиву от i - 1 до 0. Текущий индекс будет j.
    2.3 Если arr[j] < arr[i], то insertionIndex = j + 1. Выходим из цикла.
    Сдвигаем все элементы с insertionIndex до i - 1 включительно на одну позицию вперёд,
    а элемент с индексом i помещаем в insertionIndex.
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const insertIndex = findInsertionIndex(arr, i);
    shiftElements(arr, insertIndex, i);
  }

  return arr;
}

//находить индекс для вставки элемента.
function findInsertionIndex(arr, i) {
  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] < arr[i]) {
      return j + 1;
    }
  }

  return 0;
}
//будет сдвигать значения от insertionIndex до i - 1 включительно на одну позицию вперёд,
// а значение в индексе i помещать в индекс insertionIndex
function shiftElements(arr, insertionIndex, i) {
  const value = arr[i];

  for (let x = i; x > insertionIndex; x--) {
    arr[x] = arr[x-1];
  }

  arr[insertionIndex] = value;
}

console.log(insertionSort([6,5,3,1,8,7]))
