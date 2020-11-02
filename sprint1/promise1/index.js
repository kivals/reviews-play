/*
Ожидание асинхронных операций
Реализуйте функцию allSettled, которая дождётся выполнения всех промисов
и вернёт их результаты при любом исходе, — даже если один из промисов выбросил исключение.
Функция должна всегда возвращать промис, который резолвит преобразованный массив промисов в массив объектов,
каждый объект обладает следующими свойствами:

    если промис выполнился успешно — свойство status: 'resolved' и свойство value с результатом,
    если промис выполнился с ошибкой — свойство status: 'rejected' и свойство reason с текстом ошибки.
 */
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
  delay(65).then(() => 10),
  delay(100).then(() => { throw 'my error'; })
];

function allSettled(promises) {
  // return Promise.resolve([{"status": "resolved", "value": 10}, {"status": "rejected", "reason": "my error"}]);
  return Promise.all(promises.map(p => {
    return Promise.resolve(p).then(value => {
      return {
        status: 'fulfilled',
        value,
      }
    }, error => {
      return {
        status: 'rejected',
        reason: error
      }
    })
  }))
}

// if(!Promise.allSettled) {
//   Promise.allSettled = function(promises) {
//     return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//       status: 'fulfilled',
//       value: value
//     }), error => ({
//       status: 'rejected',
//       reason: error
//     }))));
//   };
// }

allSettled(promises)