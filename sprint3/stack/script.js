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
    if (this.size === 0) {
      this.head = this.tail = node;
      return ++this.size;
    }
    if (this.size === 1) {
      this.tail = node;
      this.tail.prev = this.head;
      this.head.next = this.tail;
      return ++this.size;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return ++this.size;
  }

  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (this.size === 0) {
      throw new Error('Stack is empty')
    }
    const deletedElement = this.tail;
    this.tail = deletedElement.prev;
    this.size--;
    return deletedElement.value;
  }

  // Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail;
  }

  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.pop();
stack.push(2);
stack.peek();
stack.isEmpty();
stack.pop();