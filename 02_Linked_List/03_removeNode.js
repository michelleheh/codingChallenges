/*
Implement an algorithm to delete a node in the middle of a singly linked list fiven only access to that node
Input: the node c from the linked list a -> b -> c -> d -> e
Result: nothing is returned but the new linked list looks like a -> b -> d -> e
*/

function removeNode(linkedList, node) {
  let previous;
  let current = linkedList.head;
  while ( current ) {
    if ( current === node ) {
      if ( previous ) {
        previous.next = current.next;
      } else {
        linkedList.head = linkedList.head.next;
      }
    }
    previous = current;
    current = current.next;
  }
};

module.exports = removeNode;