/*
Развернуть односвязный список
Дан односвязный список. Напишите функцию, которая его разворачивает. Должен получиться новый список, элементы которого расположены в обратном порядке.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/


function ListNode(val, next) {
  this.value = (value===undefined ? 0 : value)
  this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {
  let previousNode = null;
  let currentNode = head;
  let nextNode = head.next;

  while (nextNode !== null) {
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    nextNode = currentNode.next
  }
  currentNode.next = previousNode;
  head = currentNode;
  return head;
}

function ListNode(val, next) {
  this.value = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let third = new ListNode(3)
let second = new ListNode(2, third);
let first = new ListNode(1, second);
let head = new ListNode(0, first);

reverse(head);

