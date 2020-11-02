/**
 * Fetch
 Реализуйте класс для работы с запросами, который:

 Содержит методы GET, PUT, POST, DELETE;
 В методе GET data трансформируется в формат GET-запроса ?key1=value1&key2=value2;
 По таймауту выбрасывает ошибку;
 Умеет работать с пользовательскими заголовками;
 После успешного ответа — необходимо возвращать в промисе сам XHR, то есть разрезолвить XHR;
 Объект options должен содержать:
   timeout — время на запрос. Если запрос выполняется дольше указанного времени, должен быть reject;
   data — возможность работы с информацией: GET-параметры и JSON;
   headers — объект, для описания заголовков, у которого ключ и значение всегда string.
 */

const METHODS = {
  GET: 'GET',
  POST: 'POST'
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  let result = [];
  Object.keys(data).forEach(key => result.push(`${key}=${data[key]}`));
  return `?${result.join('&')}`;
}

class HTTPTransport {
  get = (url, options = {}) => {
    const { data } = options;
    let getUrl = url + queryStringify(data);
    return this.request(getUrl, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url, options = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  }

  // PUT, POST, DELETE

  // options:
  // headers — obj
  // data — obj
  request = (url, options, timeout = 5000) => {

    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.timeout = timeout;

      //Установка заголовков
      if (headers) {
        Object.keys(headers)
          .forEach(key => xhr.setRequestHeader(key, headers[key]));
      }

      xhr.onload = () => {
        resolve(xhr);
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = () => {
        reject( new Error('Ошибка по таймауту'))
      };

      switch (method) {
        case METHODS.GET:
          xhr.send();
          break;
        case METHODS.POST:
          xhr.send(JSON.stringify(data));
          break;
      }
    })
  };
}

new HTTPTransport().get('https://chats',
  {
    timeout: 1500,
    data: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]},
    headers: {
      'Content-Type': 'text/plain',
    }
  })
//console.log(queryStringify({a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}))
