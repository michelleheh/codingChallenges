/*
Given the head of a linkedList, implement an algorith to find the kth of last element of a singly linked List
*/

/*
1. Use an array to store the reference to the nodes
*/
function findLastkth1(linkedList, k) {
  let current = linkedList.head;
  let arr = [];
  while ( current ) {
    arr.push(current);
    current = current.next;
  }
  return arr[arr.length  - k];
};

/*
2. recusive solution
*/
function findLastkth2(linkedList, k) {
  let current = linkedList.head;
  let arr = [];
  while ( current ) {
    arr.push(current);
    current = current.next;
  }
  return arr[arr.length  - k];
};

module.exports = findLastkth2;