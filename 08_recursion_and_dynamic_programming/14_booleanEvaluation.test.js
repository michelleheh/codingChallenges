'use strict';

const assert = require('chai').assert;
const countEval = require('./14_booleanEvaluation');

describe('recursion and dynamic programming', function() {
  describe('boolean evaluation', function() {
    it('should return the number of ways of parenthesizing an expression', function() {
      const expression = '1^0|0|1';
      const result = false;
      assert.equal(countEval(expression, result), 2);
    })
  })
})
