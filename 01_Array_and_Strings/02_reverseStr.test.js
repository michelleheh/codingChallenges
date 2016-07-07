'use strict';

const assert = require('chai').assert;
const reverseStr = require('./02_reverseStr');

describe('Array_and_Strings', function() {
  describe('reverseStr', function() {
    it('should reverse a str in place', function() {
      let myStr1 = 'abc';
      reverseStr(myStr1);

      let myStr2 = 'abcd';
      reverseStr(myStr2);

      assert.equal(myStr1, 'cba');
      assert.equal(myStr2, 'dcba');
      
    });
  });
});
