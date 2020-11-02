/**
 *
 Fetch с подсчётом попыток
 Напишите функцию, которая:

 забирает данные по URL, который получила в аргументе;
 выкидывает ошибку, если не смогла получить данные за переданное в аргументе число попыток;
 если пришёл корректный ответ, вернёт response.
 Свойство retries в options— число попыток до ошибки. Это число должно быть больше единицы.

 Переиспользуйте инструмент для запросов из прошлого задания.
 */

function fetchWithRetry(url, options) {
  let { retries } = options;
  const myFetch = new HTTPTransport();

  const fetch_retry = (url, options, retries) => myFetch.get(url, options).catch(function(error) {
    if (retries === 1) throw new Error('срань');
    return fetch_retry(url, options, retries - 1);
  });

  return fetch_retry(url, options, retries)

  // function fetchRetry(url, retries) {
  //   function onError(){
  //     const triesLeft = retries - 1;
  //     if(!triesLeft){
  //       throw new Error();
  //     }
  //     return fetchRetry(url, triesLeft);
  //   }
  //   return myFetch.get(url, options).catch(onError);
  // }
  // return fetchRetry(url, retries);
}

const METHODS = {
  GET: 'GET',
};

class HTTPTransport {
  get = (url, options = {}) => {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };

  request = (url, options, timeout = 5000) => {

    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
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

fetchWithRetry('', {retries: 5}).then(r => console.log(r))


// new HTTPTransport().get('https://chats',
//   {
//     timeout: 1500,
//     data: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]},
//     headers: {
//       'Content-Type': 'text/plain',
//     }
//   })