'use strict';

const assert = require('chai').assert;
const robotGrid = require('./02_robotGrid');

describe('recursion and dynamic programming', function() {
  describe('robot grid', function() {
    it('should return a valid path', function() {
      const matrix = [[0, 0, 0],
                      [0, 0, 0],
                      [0, 0, 0]]

      assert.equal(robotGrid(matrix).length, 4);
    })
  })
})
