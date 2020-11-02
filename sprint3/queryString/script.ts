/*
queryString
Реализуйте функцию, которая преобразует объект в строку в формате GET-запроса. Функция должна:
    проверять, что на вход подали объект;
    обрабатывать вложенные объекты;
    если среди значений объекта есть массив, каждый элемент массива необходимо превращать в параметр;
    проверять корректность входа — всегда ожидаем объект, иначе выбрасываем ошибку с текстом:
    input must be an object.
 */

type StringIndexed = Record<string, unknown>;

const obj: StringIndexed = {
  key7: {b: {d: 2}},
  key5: [1, 2, 3],
  key6: {a: 1},
  key: 1,
  key2: 'test',
  key3: false,
  key4: true,
};

function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== 'object') throw new Error('input must be an object')

  function stringify(data: StringIndexed, extraKey: string = '', wrapBrackets: boolean = false): string {
    const result: string[] = [];
    Object.keys(data).forEach(key => {
      const objKey = wrapBrackets ? `[${key}]` : key;
      let value: string = '';

      if (typeof data[key] === 'object') {
        value = extraKey + stringify(data[key] as StringIndexed, objKey, true)
      } else {
        value = extraKey + objKey + '=' + data[key];
      }

      result.push(value);
    })
    return result.join('&')
  }

  return stringify(data);
}

console.log(queryStringify(obj))
// @ts-ignore
//console.log(queryStringify('asdf'))
// 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'