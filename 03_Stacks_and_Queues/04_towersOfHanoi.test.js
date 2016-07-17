'use strict';

const assert = require('chai').assert;
const towersOfHanoi = require('./04_towersOfHanoi').moveTower;
const Tower = require('./04_towersOfHanoi').Tower;

describe('Array_and_Strings', function() {
  describe('towersOfHanoi', function() {
    it('move from A to C', function() {
      let towerA = new Tower();
      let towerB = new Tower();
      let towerC = new Tower();

      towerA.push(3);
      towerA.push(2);
      towerA.push(1);
      
      moveTower(3, towerA, towerB, towerC);

      assert.deepEqual([3,2,1], towerC.storage);
    });
  });
});