'use strict';

const assert = require('chai').assert;
const findStart = require('./06_findStart');

describe('Array_and_Strings', function() {
  describe('findStart', function() {
    it('should work for a large loop', function() {
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
      nodeE.next = nodeC;

      assert.equal(findStart(myList.head).value, 'C')
    });

    it('should work for a small loop', function() {
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
      nodeE.next = nodeD;

      assert.equal(findStart(myList.head).value, 'D')
    });
  });
});