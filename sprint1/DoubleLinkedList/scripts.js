// //Нет параметра index
// if (index === undefined) {
//   if(this.head === null) {
//     this.head = node;
//   } else {
//     this.tail.next = node;
//     node.prev = this.tail;
//     this.tail = node;
//   }
//   this.size ++;
//   return;
// }
//
// if (index > 0) {
//   const indexedElement = this.searchByIndex(index);
//   let beforeIndexedElement = indexedElement.prev;
//   let afterIndexedElement = indexedElement.next;
//   beforeIndexedElement.next = node;
//   node.prev = beforeIndexedElement;
//   node.next = afterIndexedElement;
//   afterIndexedElement.prev = node;
//   this.size++;
// }
// if ( index === 0) {
//   node.next = this.head;
//   this.head.prev = node;
//   this.head = node;
//   this.size++;
// }