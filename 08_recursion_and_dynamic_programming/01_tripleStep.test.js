'use strict';

const assert = require('chai').assert;
const tripleStep = require('./01_tripleStep');

describe('recursion and dynamic programming', function() {
  describe('triple step', function() {
    it('should find the number of ways to hop N steps', function() {
      assert.equal(tripleStep(3), 4);
    })
    it('should return 0 for non positive numbers', function() {
      assert.equal(tripleStep(-2), 0);
    })
    it('should return 1 for 0', function() {
      assert.equal(tripleStep(0), 1);
    })
  })
})
