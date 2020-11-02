class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Добавляет элемент в список.
  // Если указан индекс - добавляет по индексу,
  // в противном случае добавляет в конец.
  // Если индекс за пределами — кидает ошибку.
  add(value, index) {
    const node = createNode(value);
    if (index === undefined) {
      this._addWithoutIndex(node);
    } else {
      this._addWithIndex(node, index);
    }
  }

  _addWithoutIndex(node) {
    if (this.size === 0) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  _addWithIndex(node, index) {
    if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
    }
  }

  // Удаляет элемент из списка по значению.
  // Удаляет только первый найденный элемент.
  removeByValue(value) {
    const removeElement = this.searchByValue(value);
    return removeElement ? this._removeElement(removeElement) : null;
  }

  // Удаляет элемент из списка по индексу.
  // Если индекс за пределами — кидает ошибку.
  removeByIndex(index) {
    if (this.size <= index) {
      throw new Error('Index за пределами')
    }
    const removeElement = this.searchByIndex(index);
    return this._removeElement(removeElement);
  }

  // Ищет элемент в списке по индексу.
  // Если индекс за пределами — кидает ошибку.
  searchByIndex(index) {
    if (this.size <= index) {
      throw new Error('Index за пределами')
    }
    let currentElement = this.head;
    let i = 0;
    while (i !== index) {
      currentElement = currentElement.next;
      i++;
    }
    return currentElement;
  }

  // Ищет элемент в списке по значению.
  // Возвращает первый найденный элемент.
  // Опционально можно указать индекс начала поиска.
  // Если индекс за пределами — кидает ошибку.
  searchByValue(value, startIndex = 0) {
    if (this.size <= startIndex) {
      throw new Error('Index за пределами')
    }
    let indexedElement = this.searchByIndex(startIndex);
    let i = startIndex;
    while (i !== this.size) {
      if (value === indexedElement.value) {
        return indexedElement;
      }
      i++;
      indexedElement = indexedElement.next;
    }
    return null;
  }

  show() {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(current)
      current=current.next;
    }
    console.log('---------------------------------------------')
  }

  _clearLinks(node) {
    node.next = null;
    node.prev = null;
  }

  _removeLastElement(removeElement) {
    this._clearLinks(this.head);
    this._clearLinks(this.tail);
    this._clearLinks(removeElement);
    this.size--;
    this.head = this.tail = null;
    return removeElement;
  }

  _removeElement(element) {
    if (this.size === 1) {
      return this._removeLastElement(element);
    }
    const afterElement = element.next;
    const beforeElement = element.prev;
    //если это head
    if (beforeElement === null) {
      afterElement.prev = null;
      this.head = afterElement;
    } else if (afterElement === null) {
      //если это tail
      beforeElement.next = null;
      this.tail = beforeElement;
    } else {
      beforeElement.next = afterElement;
      afterElement.prev = beforeElement;
    }
    this.size--;
    return this._clearLinks(element);
  }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}
const list = new DoublyLinkedList();
list.add('test1');
list.add('test2', 0);
list.show();
list.removeByValue('test1');
list.show();
list.removeByIndex(0);
list.show();
list.add('test1');
list.add('test2', 0);
list.show();
console.log(list.searchByIndex(1))
console.log(list.searchByValue('test1'))