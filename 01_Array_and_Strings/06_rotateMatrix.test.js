'use strict';

const assert = require('chai').assert;
const rotateMatrix = require('./06_rotateMatrix').rotateMatrix;
const rotateMatrixInPlace = require('./06_rotateMatrix').rotateMatrixInPlace;

describe('Array_and_Strings', function() {
  describe('rotateMaxtrix', function() {

    it('should rotate Matrix', function() {
      let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];

      let rotatedMatrix = [
        [3,6,9],
        [2,5,8],
        [1,4,7]
      ];

      assert.deepEqual(rotateMatrix(matrix), rotatedMatrix);
    });

    it('should rotate Matrix in place', function() {
      let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];

      let rotatedMatrix = [
        [3,6,9],
        [2,5,8],
        [1,4,7]
      ];

      rotateMatrixInPlace(matrix);
      assert.deepEqual(matrix, rotatedMatrix);
    });

  });
});