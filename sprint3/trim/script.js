/*
trim
Напишите функцию, которая умеет удалять из начала и конца строки пробельные
или отдельно заданные пользовательские символы.
Удаление пробелов из начала и конца строк — поведение по умолчанию.
Пробел необязательно должен быть передан в качестве аргумента.
 */
function escapeRegExp(strToEscape) {
    // Escape special characters for use in a regular expression
    return strToEscape.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function trim(origString, charToTrim) {
    if (!charToTrim)
        charToTrim = ' ' + '\xA0';
    var myCharToTrim = escapeRegExp(charToTrim);
    var regEx = new RegExp("^[" + myCharToTrim + "]+|[" + myCharToTrim + "]+$", "g");
    return origString.replace(regEx, "");
}
console.log(trim('  abc  ')); // => 'abc'
console.log(trim('-_-abc-_-', '_-')); // => 'abc'
console.log(trim('\xA0foo')); // "foo"
console.log(trim('\xA0foo', ' ')); // " foo"
console.log(trim('-_-ab c -_-', '_-')); //' ab c'
