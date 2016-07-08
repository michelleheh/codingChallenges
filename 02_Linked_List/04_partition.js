/*
write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or eaqual to x.
*/

function partition(linkedList, x) {
  let current = linkedList.head;
  while ( current.next ) {
    if ( current.next.value <= x ) {
      let temp = current.next
      current.next = current.next.next;
      temp.next = linkedList.head;
      linkedList.head = temp;
    } else {
      current = current.next;
    }
  }
};

module.exports = partition;