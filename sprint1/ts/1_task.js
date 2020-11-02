function namespace(str) {
    var list = str.split('.');
    var result = list.reduceRight(function (acc, current) {
        var obj = {};
        obj[current] = acc;
        return obj;
    }, {});
    // console.log(result)
}
console.log(namespace('a.b.c'));
var c = {};
var b = { c: c };
var a = { b: b };
console.log(a);
//namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
// let arr1 = [1,2,3,4];
//
// let incArr = arr1.map(n => n + 1);
//
// console.log(incArr)
