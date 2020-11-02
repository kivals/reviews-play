/*
Range
Реализовать функцию, которая генерирует числовые последовательности с заданным шагом.
Функция должна принимать три аргумента:

    start — число, с которого начнётся последовательность. Это необязательный пункт: по умолчанию функция должна начинать с 0.
    end — число, конец последовательности. Функция должна остановиться, не доходя до этого значения.
    step — число, шаг между элементами в последовательности. Это необязательный пункт: значение по умолчанию — 1.

В результате функция должна вернуть массив чисел заданной последовательности.
 */
const _ = require('lodash');

function range(start= 0, end, step= 1, isRight = true) {
  let result = [];
  let znak = Math.sign(start) !== 0 ? Math.sign(start) : 1
  if (!end) {
    end = start;
    start = 0;
  }
  let counter = isRight ? end - 1 : start;
  for (let i = start; i < Math.abs(end / (step || 1)); i ++) {
    result.push(counter);
    isRight ? counter -= step * znak : counter += step * znak;

  }
  return result;
}
 console.log(_.rangeRight(0), _.range(0))
console.log(_.rangeRight(6), _.range(6))
 console.log(_.rangeRight(1, 5), _.range(1, 5))
console.log(_.rangeRight(0, 20, 6), _.range(0, 20, 6))
console.log(_.rangeRight(2, 6, 0), _.range(2, 6, 0))
console.log(_.rangeRight(-4), _.range(-4))
console.log(_.rangeRight(0, -4, -1), _.range(0, -4, -1))
console.log(_.rangeRight(1, 4, 0), _.range(1, 4, 0))
// console.log('--------------------------------------------------')
// console.log(_.rangeRight(0), range(0))
// console.log(_.rangeRight(6), range(6))
// console.log(_.rangeRight(1, 5), range(1, 5))
// console.log(_.rangeRight(0, 20, 6), range(0, 20, 6))
// console.log(_.rangeRight(2, 6, 0), range(2, 6, 0))
// console.log(_.rangeRight(-4), range(-4))
// console.log(_.rangeRight(0, -4, -1), range(0, -4, -1))
// console.log(_.rangeRight(1, 4, 0), range(1, 4, 0))
