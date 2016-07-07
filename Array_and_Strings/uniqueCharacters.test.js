'use strict';

const assert = require('chai').assert;
const uniqueCharacter = require('./uniqueCharacters.js');

describe('Array_and_Strings', function() {
  describe('uniqueCharacter', function() {
    it('should determine if a string has all unique characters', function() {
      assert.equal(uniqueCharacter('abc'), true);
      assert.equal(uniqueCharacter('abca'), false);
    });
  });
});
