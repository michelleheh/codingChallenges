'use strict';

const assert = require('chai').assert;
const asyncMap = require('./02_asyncMap');

describe('Array_and_Strings', function() {
  describe('asyncMap', function() {
    it('should square all numbers in the array', function(done) {

      const square = function (num, doneCallback) {
        setTimeout(function(){
          return doneCallback(null, num * num);
        }, Math.random() * 500);
      };
      
      asyncMap([1, 2, 3, 4], square, (err, result) => {
        assert.deepEqual([1, 4, 9, 16], result);
        done();
      });

    });
  });
});
