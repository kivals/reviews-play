/*
Реализация очереди
Реализуйте очередь, применяя связный список для хранения элементов.
 */

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    console.log('enqueue = ', value)
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

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    console.log('dequeue')
    if (this.size === 0) {
      throw new Error('Queue is empty')
    }
    const deletedElement = this.head;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = deletedElement.next;
      this.head.prev = null;
    }
    this.size--;
    return deletedElement;
  }
  show() {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(current)
      current=current.next;
    }
    console.log('---------------------------------------------')
  }
  // Возвращает элемент в начале очереди.
  peek() {
    console.log('peek')
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    console.log('isEmpty')
    return this.size === 0;
  }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.dequeue()
queue.dequeue()
// queue.peek();
// console.log(queue.isEmpty())
// queue.dequeue();
// console.log(queue.isEmpty())

