var bubbleSort = require('./bubbleSort');
var should = require('chai').should(); 

describe('bubbleSort', function() {
  
  it('should exist', function(){
    should.exist(bubbleSort);
  });

  it('should be a function', function() {
    bubbleSort.should.be.a.Function;
  });

  // Note: Any comparison here needs to use eql. Otherwise Mocha will test for
  // exact equality (identity)

  it('should sort an array numerically', function() {
    var input = [1, 2, 43, 100, 100, 21, 21];
    var expected = [1, 2, 21, 21, 43, 100, 100];
    bubbleSort(input).should.eql(expected);
  });

  it('should sort arrays with decimal numbers', function(){
    var input = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
    var expected = [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100];
    bubbleSort(input).should.eql(expected);
  });

  it('should sort reverse sorted arrays', function(){
    bubbleSort([5, 4, 3, 2, 1]).should.eql([1, 2, 3, 4, 5]);
  });

  it('should handle presorted arrays', function() {
    bubbleSort([1, 2, 3, 4, 5]).should.eql([1, 2, 3, 4, 5]);
  });

  it('should sort arrays with negative numbers', function() {
    var input = [20, -10, -10.1, 2, 4, 299];
    var expected = [-10.1, -10, 2, 4, 20, 299];
    bubbleSort(input).should.eql(expected);
  });
});
