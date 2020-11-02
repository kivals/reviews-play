/*
Цикл flatten
Создайте функцию, которая:

    получает аргумент с массивом данных любого типа,
    разворачивает вложенные массивы в исходный массив,
    данные остальных типов оставляет без изменений.

В решении используйте цикл. Пользоваться методом reduce нельзя.
 */
flatten([1, 'any [complex] string', null, function () { }, [1, 2, [3, '4'], 0], [], { a: 1 }]);
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
function flatten(array) {
    // code here
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (!Array.isArray(value)) {
            result.push(value);
        }
        else {
            result.push(...flatten(value));
        }
    }
    return result;
}
