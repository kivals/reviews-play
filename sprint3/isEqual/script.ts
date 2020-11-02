/*
isEqual
Напишите функцию, которая выполняет глубокое сравнение между двумя значениями и определяет — являются ли они эквивалентными.
Аргументами могут быть только объекты.
 */

function isEqual(a: object, b: object): boolean {
  // Код здесь
  if (a === b) {
    return true;
  }
  return JSON.stringify(a) === JSON.stringify(b);
}

const a = {a: 1, bar: {baz: 10}};
const b = {a: 1, bar: {baz: 11}};
console.log(isEqual(a, b));
 // true