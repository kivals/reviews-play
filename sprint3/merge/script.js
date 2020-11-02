/*
merge
Напишите функцию, которая объединит два объекта с сохранением их уникальных ключей.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(lhs, rhs) {
    // Код здесь
    var result = __assign(__assign({}, lhs), rhs);
    Object.keys(result).forEach(function (key) {
        if (isObject(lhs[key]) && isObject(rhs[key])) {
            result[key] = merge(lhs[key], rhs[key]);
        }
    });
    return result;
}
function isObject(variable) {
    return Object.prototype.toString.call(variable) === '[object Object]';
}
console.log(merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { c: 1 } } }));
/*
{
    a: {
        b: {
            a: 2,
            c: 1,
        }
    },
    d: 5,
}
*/ 
