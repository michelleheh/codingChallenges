'use strict';

const assert = require('chai').assert;
const decode = require('./09_decode');

describe('Array_and_Strings', function() {
  describe('decode', function() {
    it('should decode single digits', function() {
      assert.equal(decode('0h2abe1iy'), 'hey');
    });

    it('should decode more than single digits', function() {
      assert.equal(decode('10eeeeeeeeeeh2abe1iy'), 'hey');
    });
  });
});
