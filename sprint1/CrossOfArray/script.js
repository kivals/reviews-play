/*
Пересечение двух отсортированных массивов
Даны два отсортированных числовых массива. Напишите функцию, которая находит пересечение двух массивов
и возвращает его.
Пересечение –– массив из элементов, которые встречаются в обоих массивах.

// Примеры
findEqualElements([1, 2, 3], [2]) // => [2]
findEqualElements([2], [1, 2, 3]) // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
 */

const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
  let result = [];
  arr1.forEach(value => {
    const findElement = searchElement(arr2, value);
    if(findElement) {
      result.push(findElement);
    }
  })

  return result;
}

function searchElement(arr, number, startIndex = 0, endIndex = arr.length-1) {
  if (number > arr[endIndex] || number < arr[startIndex]) {
    return null;
  }
  let currentIndex =  Math.round((startIndex + endIndex) / 2)
  if (arr[currentIndex] > number) {
    endIndex = currentIndex - 1;
    return searchElement(arr, number, startIndex, endIndex)
  } else if (arr[currentIndex] < number){
    startIndex = currentIndex + 1;
    return searchElement(arr, number, startIndex, endIndex)
  } else {
    return arr[currentIndex];
  }
}

let result = findEqualElements([1, 2, 3], [2])
console.log(result)
let result1 = findEqualElements([2], [1, 2, 3])
console.log(result1)
let result12 = findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])
console.log(result12)


