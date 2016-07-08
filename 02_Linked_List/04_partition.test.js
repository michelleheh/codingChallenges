'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const partition = require('./04_partition');

describe('Array_and_Strings', function() {
  describe('partition', function() {
    it('should remove a node in the middle', function() {
      const node01 = {value: 1, next: null};
      const node02 = {value: 2, next: null};
      const node03 = {value: 3, next: null};
      const node04 = {value: 4, next: null};
      const node05 = {value: 5, next: null};
      
      let myList = {};
      myList.head = node05;
      node05.next = node04;
      node04.next = node03;
      node03.next = node02;
      node02.next = node01;

      partition(myList, 3);
      expect(myList.head.value).to.be.at.most(2);
      expect(myList.head.next.value).to.be.at.most(2);
      expect(myList.head.next.next.value).to.be.at.least(3);
      expect(myList.head.next.next.next.value).to.be.at.least(3);
      expect(myList.head.next.next.next.next.value).to.be.at.least(3);
    });
  });
});