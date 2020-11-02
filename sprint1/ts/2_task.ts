/*
Цикл flatten
Создайте функцию, которая:

    получает аргумент с массивом данных любого типа,
    разворачивает вложенные массивы в исходный массив,
    данные остальных типов оставляет без изменений.

В решении используйте цикл. Пользоваться методом reduce нельзя.
 */

console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]))
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

// function flatten(array: unknown[]): unknown[] {
//   let result: unknown[] = [];
//   for (const value of array) {
//     if (!Array.isArray(value)) {
//       result.push(value);
//     } else {
//       result.push(...flatten(value));
//     }
//   }
//   return result;
// }

//=====================================

//type NestedArray = string | string[];
//по умолчанию укажем тип вложенных элементов как unknown
type NestedArray<T = unknown> = T | NestedArray<T>[];

function flatten<T>(array: NestedArray<T>[]): T[] {
  const result: T[] = [];

  array.forEach(value => {
    if(Array.isArray(value)) {
      result.push(...flatten(value));
    } else {
      result.push(value);
    }
  });
  return result;
}