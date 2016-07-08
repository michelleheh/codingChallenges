/*
Implement an algorith to find the kth of last element of a singly linked List
*/

function findLastkth(linkedList, k) {
  let current = linkedList.head;
  let arr = [];
  while ( current.next ) {
    arr.push(current);
    current = current.next;
  }
  return arr[-k];
};

module.exports = findkth;