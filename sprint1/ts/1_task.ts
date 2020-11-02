/*
Пространство имён
Напишите функцию, которая создаёт пространство имён. На вход подаётся строка вида: a.b.c.d.e, на выходе — вложенные друг в друга объекты.
Проверьте, что разделителем служит точка.
 */
interface iObj {
  [key: string]: object
}
function namespace(str: string): iObj {
  let list: string[] = str.split('.');
  return list.reduceRight<iObj>((acc: object, current:string) => {
    let obj: iObj = {};
    obj[current] = acc;
    return obj;
  }, {})
}

console.log(JSON.stringify(namespace('a.b.c.d.e')))
//namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"


/*
const namespace = (str: string): object => str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});

 */

