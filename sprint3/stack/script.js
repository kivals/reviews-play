/*
Реализация стека
Реализуйте стек, применяя связный список для хранения элементов.
 */

class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
    const node = { value, next: null, prev: null };
  ...
  }

  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
  ...
  }

  // Возвращает верхний элемент стека без его удаления.
  peek() {
  ...
  }

  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
  ...
  }
}``