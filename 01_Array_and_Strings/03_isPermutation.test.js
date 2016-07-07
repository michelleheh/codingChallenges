'use strict';

const assert = require('chai').assert;
const isPermutation = require('./03_isPermutation');

describe('Array_and_Strings', function() {
  describe('isPermutation', function() {
    it('should decide if one string is permutation of anther', function() {
      assert.equal(isPermutation('abc', 'a'), false);
      assert.equal(isPermutation('abbc', 'bbca'), true);
      assert.equal(isPermutation('abc', 'aaa'), false);
    });

  });
});
