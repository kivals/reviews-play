/*
Мемоизация №1
Функция getData ходит за данными и возвращает промис.
Напишите кеширующую функцию memoize со следующим поведением:
    Если getData ещё не была вызвана, вызывает её и кеширует результат;
    Если вызывалась раньше заданного в функции времени — возвращает сохранённый результат;
    Если вызывалась позже заданного в функции времени, нужно заново сходить за данными.
 */

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000)
  })
}

const memoized = memoize(getData, 1000);

function memoize(func, timer) {
  let lastCallTime, cache;
  return () => {
    const currentTime = new Date().getTime();
    if (lastCallTime + timer < currentTime) {
      cache = undefined;
    }
    if (!cache) {
      return func().then(value => {
        cache = value;
        lastCallTime = new Date().getTime();
        return value;
      });
    } else {
      return Promise.resolve(cache);
    }
  }
}

memoized()
  .then(data1 => console.log(data1)) // получаем долго
  .then(memoized)
  .then(data2 => console.log(data2)) // получаем быстро, из кеша
  .then(memoized)
  .then(data3 => console.log(data3)) // получаем быстро, из кеша

setTimeout(memoized, 5000); // получаем долго, считается заново