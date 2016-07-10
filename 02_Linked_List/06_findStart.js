/*
Given a circular linked list, implement an algorithm which return the node at the begining of the loop.

DEFINITION
Circular linked list: A(corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list. 

EXAMPLE
Input: A -> B -> C -> D -> E -> C [the same C as earlier]
Ouput: C
*/

function findStart(linkedListHead) {
  let runner1 = linkedListHead.next;
  let runner2 = linkedListHead.next.next;

  while ((runner1 !== runner2)) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;
  }

  runner2 = linkedListHead;

  while (runner1 !== runner2) {
    runner1 = runner1.next;
    runner2 = runner2.next;
  }
  return runner1;
};

module.exports = findStart;