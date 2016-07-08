'use strict';

const assert = require('chai').assert;
const addNumbers = require('./05_addNumbers').addNumbers;
const addNumbersReverse = require('./05_addNumbers').addNumbersReverse;
const addNumbersExtra = require('./05_addNumbers').addNumbersExtra;

describe('Array_and_Strings', function() {
  describe('addNumbers', function() {
    it('should add two numbers', function() {
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

    it('should add two numbers in reverse order', function() {
      const node07 = {value: 7, next: null};
      const node01 = {value: 1, next: null};
      const node06 = {value: 6, next: null};
      
      const node05 = {value: 5, next: null};
      const node09 = {value: 9, next: null};
      const node02 = {value: 2, next: null};

      let linkedList1 = {};
      linkedList1.head = node06;
      node06.next = node01;
      node01.next = node07;

      let linkedList2 = {};
      linkedList2.head = node02;
      node02.next = node09;
      node09.next = node05;
      
      const sumList = addNumbersReverse(linkedList1, linkedList2);
      assert.equal(sumList.head.value, 9);
      assert.equal(sumList.head.next.value, 1);
      assert.equal(sumList.head.next.next.value, 2);
    });

    xit('should add two numbers of different length in reverse order', function() {
      const node07 = {value: 7, next: null};
      const node01 = {value: 1, next: null};
      const node06 = {value: 6, next: null};
      const node03 = {value: 3, next: null};
      
      const node05 = {value: 5, next: null};
      const node09 = {value: 9, next: null};
      const node02 = {value: 2, next: null};

      let linkedList1 = {};
      linkedList1.head = node03;
      node03.next = node06;
      node06.next = node01;
      node01.next = node07;

      let linkedList2 = {};
      linkedList2.head = node02;
      node02.next = node09;
      node09.next = node05;
      
      const sumList = addNumbersReverse(linkedList1, linkedList2);
      assert.equal(sumList.head.value, 3);
      assert.equal(sumList.head.next.value, 9);
      assert.equal(sumList.head.next.next.value, 1);
      assert.equal(sumList.head.next.next.next.value, 2);
    });

  });
});