/*
Реализовать методы, которые в процессе выполнения строки
(2).plus(3).minus(1) дали бы на выходе 4.
 */

Number.prototype.plus = function (value) {
  return this + value;
}

Number.prototype.minus = function (value) {
  return this - value;
}

console.log((2).plus(3).minus(1))