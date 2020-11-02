/*
cloneDeep
Напишите функцию, которая выполняет глубокое копирование значений.
 */
function isObject(variable: unknown) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}

function cloneDeep<T extends object = object>(obj: T) {
  if (Array.isArray(obj)) {
    return [...obj];
  }
  if (isObject(obj)) {
    return Object.assign({}, obj);
  }
  return obj;
}

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);

console.log(deep[0] === objects[0]); // => false