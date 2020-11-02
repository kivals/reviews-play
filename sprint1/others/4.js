/*
Используя свойство функций prototype, добавьте в неё метод getUpperName
после создания экземпляра.
Метод должен вернуть значение поля name в верхнем регистре.
 */

function Book() {
  this.name = 'foo';
}

Book.prototype = {
  getName: function() {
    return this.name;
  }
}


var book = new Book();

// В этой строке определить метод getUpperName
Book.prototype = {
  getUpperName: function() {
    return this.name.toUpperCase();
  }
}
console.log(book.getUpperName()); // 'FOO'