/*
implement async.map

const square = function (num, doneCallback) {
  setTimeout(function(){
    return doneCallback(null, num * num);
  }, 500);
};

asyncMap([1, 2, 3, 4], square, (err, result) => console.log(result) );
output: [ 1, 4, 9, 16 ]
*/

const asyncMap = function(arr, func, callback) {
  let result = [];
  let count = 0;
  arr.forEach((item, index) => {
    func(item, (err, data) => {
      if (err) return err;
      result[index] = data;
      count++;
      if ( count === arr.length ) callback(data);
    });
  });
};

module.exports = asyncMap;


