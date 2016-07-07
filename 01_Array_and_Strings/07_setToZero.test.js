'use strict';

const assert = require('chai').assert;
const setToZero = require('./06_setToZero');

describe('Array_and_Strings', function() {
  describe('setToZero', function() {
    it('should work when there is only one zero found', function() {
      let matrix = [
        [1,2,3,4],
        [5,6,0,8],
        [9,10,11,12]
      ];

      assert.equal(setToZero(matrix), [
        [1,2,0,4],
        [0,0,0,0],
        [9,10,0,12]
      ]);
    });

    it('should work when there are multiple zeros found', function() {
      let matrix = [
        [1,0,3,4],
        [5,6,0,8],
        [9,10,11,12]
      ];

      assert.equal(setToZero(matrix), [
        [1,0,0,4],
        [0,0,0,0],
        [9,0,0,12]
      ]);
    });
  });
});
