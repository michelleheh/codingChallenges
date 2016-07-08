'use strict';

const assert = require('chai').assert;
const isRotation = require('./08_isRotation');

describe('Array_and_Strings', function() {
  describe('isRotation', function() {
    it('should check if s1 is rotation of s2', function() {
      assert.equal(isRotation('waterbottle', 'bottlewater'), true);
    });

    it('sshould check if s1 is NOT rotation of s2', function() {
      assert.equal(isRotation('racecar', 'race'), false);
    });
  });
});
