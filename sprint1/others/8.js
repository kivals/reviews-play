/*
isEmpty
Создайте функцию, которая проверяет, является ли переданный аргумент пустым.
Аргументами могут быть:

    object,
    array,
    map,
    set,
    примитивы.

Значения 1, 0, null, false, "", undefined, [], {} должны возвращать true.
 */
const _ = require('lodash');

function isEmpty(value) {
  const type = typeof value;
  switch (type) {
    case 'string':
      return !value
    case 'number':
      return true;
    case 'object':
      return !((value && value.size) || (value && Object.keys(value).length));
    case 'boolean':
      return value;
  }
  return true
}
var mySet = new Set();
//mySet.add(1); // Set { 1 }

const myMap = new Map();
//myMap.set('prop', 'value associated with “a string”');
// console.log(isEmpty(null)); // => true
// console.log(isEmpty(true)); // => true
// console.log(isEmpty(1)); // => true
// console.log(isEmpty([1, 2, 3])); // => false
// console.log(isEmpty({ 'a': 1 })); // => false
// console.log(isEmpty('123')); // => false
// console.log(isEmpty('')); // => true
// console.log(isEmpty(0)); // => true
console.log(_.isEmpty())
console.log(isEmpty())
