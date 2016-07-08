'use strict';

const assert = require('chai').assert;
const removeDuplicates = require('./08_removeDuplicates');

describe('Linked_List', function() {
  describe('removeDuplicates', function() {
    it('it should removeDuplicates', function() {
      const node01 = {value: 1, next: null};
      const node02a = {value: 2, next: null};
      const node02b = {value: 2, next: null};
      const node02c = {value: 2, next: null};
      const node03 = {value: 3, next: null};

      const myList = {head: node01};
      node01.next = node02a;
      node02a.next = node02b;
      node02b.next = node02c;
      node02c.next = node03;

      removeDuplicates(myList);

      assert.equal(myList.head.value, 1);
      assert.equal(myList.head.next.value, 2);
      assert.equal(myList.head.next.next.value, 3);

    });
  });
});
