/*
merge
Напишите функцию, которая объединит два объекта с сохранением их уникальных ключей.
 */

type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // Код здесь
  let result = { ...lhs, ...rhs };
  Object.keys(result).forEach(key => {
    if (isObject(lhs[key]) && isObject(rhs[key])) {
      result[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
    }
  })
  return result
}

function isObject (variable: unknown) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

console.log(merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}}));
/*
{
	a: {
		b: {
			a: 2,
			c: 1,
		}
	},
	d: 5,
}
*/