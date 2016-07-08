'use strict';

const assert = require('chai').assert;
const findLastkth = require('./02_findLastkth');

describe('Array_and_Strings', function() {
  describe('findLastkth', function() {
    it('should return kth of last element', function() {
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
      
      assert.equal(findLastkth(myList.head, 1).value, 5);
      assert.equal(findLastkth(myList.head, 2).value, 4);

    });
  });
});
