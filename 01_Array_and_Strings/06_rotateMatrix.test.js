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

      let matrix2 = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
      ];

      let rotatedMatrix2 = [
        [13,9,5,1],
        [14,10,6,2],
        [15,11,7,3],
        [16,12,8,4]
      ];

      rotateMatrixInPlace(matrix);
      rotateMatrixInPlace(matrix2);
      assert.deepEqual(matrix, rotatedMatrix);
      assert.deepEqual(matrix2, rotatedMatrix2);
    });

  });
});