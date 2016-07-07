'use strict';

const assert = require('chai').assert;
const reverseStr = require('./02_reverseStr');

describe('Array_and_Strings', function() {
  describe('reverseStr', function() {
    it('should reverse a str in place', function() {
      let myStr1 = 'abc';
      let myStr2 = 'abcd';
      assert.equal(reverseStr(myStr1), 'cba');
      assert.equal(reverseStr(myStr2), 'dcba');
    });
  });
});
