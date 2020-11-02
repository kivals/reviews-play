/*
set
Напишите функцию set, которая получает путь к вложенному свойству объекта и устанавливает значение в это свойство.
Если поля не существует, его нужно создать по указанному пути.
Проверьте, что path — строка, иначе нужно выбросить ошибку path must be string.
Если object не объект, то метод set должен вернуть значение object.
В решении можно переиспользовать функцию слияния объектов — merge.
*/
function isObject(variable: unknown) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}

function isString(string: unknown): boolean {
  return typeof string === 'string';
}

type Indexed<T = unknown> = {
  [key in string]: T;
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  let result = Object.assign(lhs, rhs);
  Object.keys(result).forEach(key => {
    if (isObject(lhs[key]) && isObject(rhs[key])) {
      result[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
    }
  })

  return result;
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (!isString(path)) {
    throw new Error('path must be string');
  }
  if (!isObject(object)) {
    return object;
  }
  const pathList = path.split('.');
  const pathObj: Indexed = pathList.reduceRight((result, current, index) => {
    const newObj: Indexed = {};
    if(index === pathList.length - 1) {
      newObj[current] = value;
      return newObj;
    }
    newObj[current] = result;
    return newObj;
  }, {})

  merge(object as Indexed, pathObj);
}

const testObj = {
  foo: 5
}

set(testObj, 'bar.baz', 10);
console.log(testObj)
console.log(set(3, 'foo.bar', 'baz'))
//set(3, 'foo.bar', 'baz')

/**
 * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
 * set(3, 'foo.bar', 'baz'); // 3
 */


