/*
Implement a function to check if a linked list is a palindrome
*/

function isPalindrome(linkedListHead) {
  // base case 
  if ( !linkedListHead || !linkedListHead.next ) return true;
  let currentNode = linkedListHead;
  while (currentNode.next.next) {
    currentNode = currentNode.next;
  }
  if ( currentNode.next.value !== linkedListHead.value ) return false;
  currentNode.next = null;
  return isPalindrome(linkedListHead.next);
};

module.exports = isPalindrome;