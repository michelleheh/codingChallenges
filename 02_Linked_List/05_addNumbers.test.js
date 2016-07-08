'use strict';

const assert = require('chai').assert;
const addNumbers = require('./05_addNumbers');

describe('Array_and_Strings', function() {
  describe('addNumbers', function() {
    it('should remove a node in the middle', function() {
      const node07 = {value: 7, next: null};
      const node01 = {value: 1, next: null};
      const node06 = {value: 6, next: null};
      
      const node05 = {value: 5, next: null};
      const node09 = {value: 9, next: null};
      const node02 = {value: 2, next: null};

      let linkedList1 = {};
      linkedList1.head = node07;
      node07.next = node01;
      node01.next = node06;

      let linkedList2 = {};
      linkedList2.head = node05;
      node05.next = node09;
      node09.next = node02;
      
      const sumList = addNumbers(linkedList1, linkedList2);
      assert.equal(sumList.head.value, 2);
      assert.equal(sumList.head.next.value, 1);
      assert.equal(sumList.head.next.next.value, 9);
    });
  });
});