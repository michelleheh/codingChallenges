'use strict';

const assert = require('chai').assert;
const isPalindrome = require('./06_isPalindrome');

describe('Array_and_Strings', function() {
  describe('isPalindrome', function() {
    it('should return false if it\'s not a Palindrome', function() {
      const nodeA = {value: 'A', next: null};
      const nodeB = {value: 'B', next: null};
      const nodeC = {value: 'C', next: null};
      const nodeD = {value: 'D', next: null};
      const nodeE = {value: 'E', next: null};
      
      let myList = {};
      myList.head = nodeA;
      nodeA.next = nodeB;
      nodeB.next = nodeC;
      nodeC.next = nodeD;
      nodeD.next = nodeE;

      assert.equal(isPalindrome(myList.head), false);
    });

    it('should return true for odd-nodes Palindrome', function() {
      const nodeA = {value: 'A', next: null};
      const nodeB = {value: 'B', next: null};
      const nodeC = {value: 'C', next: null};
      const nodeD = {value: 'B', next: null};
      const nodeE = {value: 'A', next: null};
      
      let myList = {};
      myList.head = nodeA;
      nodeA.next = nodeB;
      nodeB.next = nodeC;
      nodeC.next = nodeD;
      nodeD.next = nodeE;

      assert.equal(isPalindrome(myList.head), true)
    });

    it('should return true for even-nodes Palindrome', function() {
      const nodeA = {value: 'A', next: null};
      const nodeB = {value: 'B', next: null};
      const nodeC = {value: 'C', next: null};
      const nodeD = {value: 'C', next: null};
      const nodeE = {value: 'B', next: null};
      const nodeF = {value: 'A', next: null};
      
      let myList = {};
      myList.head = nodeA;
      nodeA.next = nodeB;
      nodeB.next = nodeC;
      nodeC.next = nodeD;
      nodeD.next = nodeE;
      nodeE.next = nodeF;

      assert.equal(isPalindrome(myList.head), true)
    });
  });
});