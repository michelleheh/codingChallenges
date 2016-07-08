'use strict';

const assert = require('chai').assert;
const removeNode = require('./03_removeNode');

describe('Array_and_Strings', function() {
  describe('removeNode', function() {
    it('should remove a node in the middle', function() {
      const node01 = {value: 1, next: null};
      const node02 = {value: 2, next: null};
      const node03 = {value: 3, next: null};
      const node04 = {value: 4, next: null};
      const node05 = {value: 5, next: null};
      
      let myList = {};
      myList.head = node01;
      node01.next = node02;
      node02.next = node03;
      node03.next = node04;
      node04.next = node05;

      removeNode(node03);
      assert.equal(node02.next.value, 4);
    });

    it('should remove head', function() {
      const node01 = {value: 1, next: null};
      const node02 = {value: 2, next: null};
      const node03 = {value: 3, next: null};
      const node04 = {value: 4, next: null};
      const node05 = {value: 5, next: null};
      
      let myList = {};
      myList.head = node01;
      node01.next = node02;
      node02.next = node03;
      node03.next = node04;
      node04.next = node05;

      removeNode(node01);
      assert.equal(myList.head.value, 2);
    });

    it('should remove tail', function() {
      const node01 = {value: 1, next: null};
      const node02 = {value: 2, next: null};
      const node03 = {value: 3, next: null};
      const node04 = {value: 4, next: null};
      const node05 = {value: 5, next: null};
      
      let myList = {};
      myList.head = node01;
      node01.next = node02;
      node02.next = node03;
      node03.next = node04;
      node04.next = node05;

      removeNode(node05);
      assert.equal(node04.next, null);
    });

  });
});
