/*
Write code to remove duplicates from an unsorted linked list
FOLLOW UP
How would you solve this problem if no hash table is not allowed?
*/

/*
use a hash tab
Time complexity: O(n)
Space complexity: O(n)
*/
function removeDuplicates1(linkedList){
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

/*
without a hash table
Time complexity: O(n2)
Space complexity: O(1)
*/

function removeDuplicates2(linkedList){
  let current = linkedList.head;
  let previous = current;
  let runner = current.next;

  while ( current.next ) {
    while( runner.next ) {
      if ( runner.value === current.value ) {
        previous.next = runner.next;
      } else {
        previous = previous.next;
      }
      runner = runner.next
    }
    current = current.next;
    previous = current;
    runner = current.next
  }
};


module.exports = removeDuplicates2;