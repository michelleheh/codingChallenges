/*
Given the head of a linkedList, implement an algorith to find the kth of last element of a singly linked List
*/

/*
1. Use an array to store the reference to the nodes
*/
function findLastkth1(linkedListHead, k) {
  let current = linkedListHead;
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
function findLastkth2(linkedListHead, k) {
  if ( !linkedListHead.next ) return 1;

  const returnValue = findLastkth2(linkedListHead.next, k);
  if ( returnValue === k ) { 
    return linkedListHead.next; 
  } else if ( typeof(returnValue) === "object" ) {
    return returnValue;
  } else {
    return returnValue + 1;
  }
};

/*
3. iteratvie solution with 2 pointers k distance apart
*/
function findLastkth3(linkedListHead, k) {
  let current = linkedListHead;
  let runner = current;
  for (let i = 0; i < k; i ++){
    runner = runner.next;
  }

  while (runner) {
    runner = runner.next;
    current = current.next;
  }

  return current;
};

module.exports = findLastkth3;
