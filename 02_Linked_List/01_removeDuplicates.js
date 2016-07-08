/*
Write code to remove duplicates from an unsorted linked list
FOLLOW UP
How would you solve this problem if no hash table is not allowed?
*/

function removeDuplicates(linkedList){
  let store = {};
  let previous = linkedList.head;
  let current = previous.next;

  while ( current.next ) {
    store[previous.value] = true;
    if ( store[current.value] ) { 
      previous.next = current.next; 
    } else {
      previous = current;
    }
    current = current.next;
  }
};

module.exports = removeDuplicates;