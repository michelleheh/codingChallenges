'use strict';

const assert = require('chai').assert;
const stringCompression = require('./05_stringCompression');

describe('Array_and_Strings', function() {
  describe('stringCompression', function() {
    it('should compress long string', function() {
      assert.equal(stringCompression('aabcccccaaa'), 'a2b1c5a3');
    });

    it('should return the original string is the compression is not shorter', function() {
      assert.equal(stringCompression('abc'), 'abc');
      assert.equal(stringCompression('aabc'), 'aabc');
    });
  });
});
