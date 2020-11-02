/*
Zip
Напишите функцию zip. Она принимает любое число объектов, а возвращает единственный объект,
который содержит все поля исходных объектов. Если один и тот же ключ встречается в нескольких объектах,
следует оставить то значение, что встретилось первым.
 */

function zip(...objList) {
  return objList.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      if(!acc[key]) {
        acc[key] = obj[key];
      }
    })
    return acc;
  }, {})
}

const a = {prop1: 'Aprop1Val', prop2: 'Aprop2Val'}
const b = {prop1: 'Bprop1Val', prop4: 'Bprop2Val'}
const c = {prop5: 'Cprop1Val', prop2: 'Cprop2Val'}
console.log(zip(a,b,c))
//console.log(zip(a, b, c))