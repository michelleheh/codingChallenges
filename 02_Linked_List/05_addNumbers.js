/*
You have two nubers represeted by a linked list, where each node contains a signle digit.  The digits are stroed in reverse order, such that the 1's digit is at the head of the list.  Write a funtion that adds the two numbers and returns the sum as a linked list.

Example
input: ( 7 -> 1 -> 6 ) + ( 5 -> 9 -> 2 ). that is 716 + 295
output: ( 2 -> 1 -> 9 ). that is 912

FOLLOW UP
suppose the digits are stred in forward order. Pepeat the above problem.
Example
input: ( 6 -> 1 -> 7 ) + ( 2 -> 9 -> 5 ). that is 716 + 295
output: ( 9 -> 1 -> 2 ). that is 912
what if the two numbers have different digits

*/

function addNumbers(linkedList1, linkedList2) {
  let newList = {head: null};
  let newCurrent;
  let current1 = linkedList1.head;
  let current2 = linkedList2.head;
  let count = 1;
  let extra = 0

  while ( current1 || current2 ) {
    let sum = current1.value + current2.value + extra;
    console.log('sum', sum);
    if ( sum > 9 ) {
      newCurrent = { value: sum - 10, next: null };
      extra = 1;
    } else {
      newCurrent = { value: sum, next: null };
      extra = 0;
    }
    if ( count === 1 ) {
      newList.head = newCurrent;
    } 
    newCurrent.next = newCurrent;
    current1 = current1.next;
    current2 = current2.next;
    count ++;
  }

  return newList;

};

module.exports = addNumbers;